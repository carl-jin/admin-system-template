import { RouterNameEnum } from '@/enum/router';
import { MenuProps } from 'antd';
import IIcon from '@/components/IIcon';

type MenuItem = Required<MenuProps>['items'][number];

export default [
  {
    key: RouterNameEnum.HOME,
    icon: <IIcon icon={'hugeicons:database'} />,
    label: '首页',
    children: [
      {
        key: `${RouterNameEnum.HOME}/${RouterNameEnum.HOME_DASHBOARD}`,
        label: '仪表盘',
        icon: <IIcon icon={'f7:doc-text-search'} />,
      },
    ],
  },
] as MenuItem[];
