import Header from '@/layout/Header';
import { RouterProvider } from 'react-router-dom';
import { ConfigProvider, theme, Layout, App as AntdApp } from 'antd';
import Router from './router';
import useThemeStore from '@/store/theme';
import zhCn from 'antd/locale/zh_CN';
import InjectGlobalAntdApp from '@/components/InjectGlobalAntdApp';
import Side from '@/layout/Side';

const { Content } = Layout;

export default function App() {
  const { isDarkMode } = useThemeStore();

  const customTheme = {
    token: {
      colorPrimary: '#9E339F',
      colorBgContainer: isDarkMode ? '#1f1f1f' : '#ffffff',
      colorBgLayout: isDarkMode ? '#141414' : '#f0f2f5',
      colorText: isDarkMode ? '#ffffff' : '#000000',
    },
    components: {
      Menu: {
        darkItemBg: '#1a1a1a',
        darkSubMenuItemBg: '#1a1a1a',
        darkItemHoverBg: '#2c2c2c',
        darkItemSelectedBg: '#9E339F',
      },
      Layout: {
        siderBg: isDarkMode ? '#1a1a1a' : '#ffffff',
        headerBg: isDarkMode ? '#1a1a1a' : '#ffffff',
      },
    },
  };

  return (
    <ConfigProvider
      theme={{
        algorithm: isDarkMode ? theme.darkAlgorithm : theme.defaultAlgorithm,
        ...customTheme,
      }}
      locale={zhCn}
    >
      <AntdApp>
        <InjectGlobalAntdApp />
        <Layout style={{ minHeight: '100vh' }}>
          <Header
            style={{
              background: customTheme.components.Layout.headerBg,
            }}
          />

          <Layout>
            <Side bg={customTheme.components.Layout.siderBg} />

            <Content
              style={{
                margin: '24px 16px',
                padding: 24,
                minHeight: 280,
                background: customTheme.token.colorBgContainer,
                maxHeight: '100vh',
                overflow: 'auto',
              }}
            >
              <div className={'mx-auto max-w-[1320px]'}>
                <RouterProvider router={Router} />
              </div>
            </Content>
          </Layout>
        </Layout>
      </AntdApp>
    </ConfigProvider>
  );
}
