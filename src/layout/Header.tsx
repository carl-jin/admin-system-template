import { theme, Switch, Flex, Space } from 'antd';
import { CSSProperties } from 'react';
import useThemeStore from '@/store/theme';
import UserAuth from '@/components/UserAuth';
import DocsLinks from '@/components/DocsLinks';

export default function Header(props: { style: CSSProperties }) {
  const { isDarkMode, toggleTheme } = useThemeStore();

  return (
    <div
      className={'h-[48px]'}
      style={{
        ...props.style,
        padding: 0,
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Flex
        className={'w-full px-3'}
        justify={'space-between'}
      >
        <Space>
          <div className={'text-2xl font-bold ml-2'}>ID 库</div>
        </Space>
        <Space size={24}>
          <DocsLinks />
          <UserAuth />
          <Switch
            checked={isDarkMode}
            onChange={(checked) => toggleTheme(checked)}
            checkedChildren="🌙"
            unCheckedChildren="☀️"
          />
        </Space>
      </Flex>
    </div>
  );
}
