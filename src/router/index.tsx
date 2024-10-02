import Home from '@/views/Home';
import Login from '@/views/Login';
import { createBrowserRouter, redirect } from 'react-router-dom';
import { RouterNameEnum } from '@/enum/router';
import AuthGuard from './guard/AuthGuard';
import Dashboard from '@/views/Home/Dashbaord';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AuthGuard component={<Home />} />,
  },
  {
    path: `/${RouterNameEnum.HOME}`,
    element: <AuthGuard component={<Home />} />,
    children: [
      {
        index: true,
        path: RouterNameEnum.HOME_DASHBOARD,
        element: <AuthGuard component={<Dashboard />} />,
      },
    ],
  },
  {
    path: `/${RouterNameEnum.LOGIN}`,
    element: <Login />,
  },
]);

export default router;
