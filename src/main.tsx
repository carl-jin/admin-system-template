import './styles/tailwind.css';
import './styles/global.less';
import './styles/antd.less';
import 'antd/dist/reset.css';
import { createRoot } from 'react-dom/client';
import App from './App';
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn.js';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.locale('zh-cn');
dayjs.extend(relativeTime);

const container = window.document.getElementById('root') as HTMLDivElement;
const root = createRoot(container);
root.render(<App />);
