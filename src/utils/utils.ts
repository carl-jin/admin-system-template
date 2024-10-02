/**
 * 将提供的文本复制到剪贴板。
 * 这个函数支持现代浏览器的 Clipboard API 和传统的 execCommand 方法。
 *
 * @param text 要复制到剪贴板的文本
 * @returns 一个 Promise，解析为一个布尔值，表示复制操作是否成功
 */
export async function copyText(text: string): Promise<boolean> {
  // 检查是否支持 navigator.clipboard API
  if (navigator.clipboard && window.isSecureContext) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  }

  // 回退方法：使用 execCommand
  try {
    const textArea = document.createElement('textarea');
    textArea.value = text;

    // 避免滚动到底部
    textArea.style.top = '0';
    textArea.style.left = '0';
    textArea.style.position = 'fixed';

    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    const successful = document.execCommand('copy');
    document.body.removeChild(textArea);

    if (successful) {
      return true;
    } else {
      console.warn('execCommand: Copying text command was unsuccessful');
    }
  } catch (err) {
    console.error('Failed to copy text: ', err);
  }

  // 如果两种方法都失败了
  return false;
}

export function isPureNumberRegex(str) {
  return /^\d+$/.test(str);
}

export function formatFileSize(bytes: number) {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}
