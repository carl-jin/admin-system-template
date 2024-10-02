import {
  RedditOutlined,
  SearchOutlined,
  IdcardOutlined,
  LineChartOutlined,
  UserOutlined,
  CloudUploadOutlined,
} from '@ant-design/icons';
import { RouterNameEnum } from '@/enum/router';
import { MenuProps } from 'antd';
import IIcon from '@/components/IIcon';

type MenuItem = Required<MenuProps>['items'][number];

export default [
  {
    key: RouterNameEnum.ID_SEARCH,
    icon: <IIcon icon={'hugeicons:database'} />,
    label: '专页ID库',
    children: [
      {
        key: `${RouterNameEnum.ID_SEARCH}/${RouterNameEnum.ID_SEARCH_LEAD_SEARCH}`,
        label: '线索查询',
        icon: <IIcon icon={'f7:doc-text-search'} />,
      },
      {
        key: `${RouterNameEnum.ID_SEARCH}/${RouterNameEnum.ID_SEARCH_LEAD_UPLOAD}`,
        label: '上传线索',
        icon: <IIcon icon={'icon-park-outline:people-upload'} />,
      },
      {
        key: `${RouterNameEnum.ID_SEARCH}/${RouterNameEnum.ID_SEARCH_LEAD_ELIMINATION}`,
        label: '上传淘汰',
        icon: <IIcon icon={'mdi:user-off-outline'} />,
      },
      {
        key: `${RouterNameEnum.ID_SEARCH}/${RouterNameEnum.ID_SEARCH_PAGE_STATISTICS}`,
        label: '专页统计',
        icon: <IIcon icon={'ph:table-light'} />,
      },
      {
        key: `${RouterNameEnum.ID_SEARCH}/${RouterNameEnum.ID_SEARCH_ACCOUNT_STATISTICS}`,
        label: '语系统计',
        icon: <IIcon icon={'gridicons:stats-alt-2'} />,
      },
    ],
  },
  {
    key: RouterNameEnum.ID_FRIEND,
    icon: <IIcon icon={'icon-park-outline:data-user'} />,
    label: '好友 ID库',
    children: [
      {
        key: `${RouterNameEnum.ID_FRIEND}/${RouterNameEnum.ID_FRIEND_UPLOAD_FILES}`,
        label: '上传好友',
        icon: <IIcon icon={'solar:file-send-broken'} />,
      },
      {
        key: `${RouterNameEnum.ID_FRIEND}/${RouterNameEnum.ID_FRIEND_SEARCH}`,
        label: '搜索好友',
        icon: <IIcon icon={'mingcute:user-search-line'} />,
      },
    ],
  },
  // {
  //   key: RouterNameEnum.ADD_FRIENDS_SEARCH,
  //   icon: <BugOutlined />,
  //   label: '加好友查询',
  // },
] as MenuItem[];
