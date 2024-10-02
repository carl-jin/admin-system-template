import { post } from '@/api/axios';
import { UserType } from '@/store/user';

export async function login(username: string, password: string) {
  return await post<{ data: { user: UserType; access_token: string } }>('/login', {
    email: username,
    password,
  });
}

export async function logout() {
  return await post<string>('/logout');
}
