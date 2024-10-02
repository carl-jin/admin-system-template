import { Layout, Menu } from 'antd';
import MenuItems from '@/menu';
import useUserStore from '@/store/user';
import { useEffect, useMemo, useState } from 'react';
import useThemeStore from '@/store/theme';
import Router from '@/router';
import { RouterNameEnum } from '@/enum/router';
import { useLocation } from 'react-use';

const { Sider } = Layout;

export default function Side(props: { bg: string }) {
  const { token, user } = useUserStore();
  const { isDarkMode } = useThemeStore();
  const [selectedKeys, setSelectedKeys] = useState<string[]>([]);
  const [openKeys, setOpenKeys] = useState<string[]>([`${RouterNameEnum.ID_SEARCH}`]);
  const location = useLocation();

  const menu = useMemo(() => {
    if (!user) return [];
    //  根据不同类型，返回不同的 menu
    if (user.type === 'add-friend') {
      return MenuItems.filter((item) => item.key === RouterNameEnum.ID_FRIEND);
    } else {
      return MenuItems.filter((item) => item.key === RouterNameEnum.ID_SEARCH);
    }
  }, [user]);

  useEffect(() => {
    // 解析当前路径
    const pathSnippets = location.pathname.split('/').filter((i) => i);

    setSelectedKeys([`${pathSnippets.join('/')}`]);
    setOpenKeys([pathSnippets[0]]);
  }, [location]);

  function handleRouterChange(ev) {
    setSelectedKeys(ev.key);
    Router.navigate(`/${ev.key}`);
  }

  if (!token) return <></>;

  return (
    <Sider
      trigger={null}
      collapsible={false}
      style={{
        background: props.bg,
      }}
    >
      <Menu
        selectedKeys={selectedKeys}
        theme={isDarkMode ? 'dark' : 'light'}
        mode="inline"
        multiple={false}
        items={menu}
        onClick={handleRouterChange}
        inlineIndent={18}
        onOpenChange={(keys) => setOpenKeys(keys)}
        openKeys={openKeys}
      />
    </Sider>
  );
}
