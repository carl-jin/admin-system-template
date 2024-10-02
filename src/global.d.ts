import { useAppProps } from 'antd/es/app/context';

export declare global {
  interface Window {
    antdApp: useAppProps;
    token: string;
  }
}
