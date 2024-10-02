import { ReactNode } from 'react';
import useUserStore from '@/store/user';
import { Navigate } from 'react-router-dom';
import { RouterNameEnum } from '@/enum/router';

export default function AuthGuard(props: { component: ReactNode }) {
  const { token } = useUserStore.getState();
  if (!token) {
    return <Navigate to={`/${RouterNameEnum.LOGIN}`} />;
  }

  return <>{props.component}</>;
}
