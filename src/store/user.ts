import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { login, logout } from '@/api/auth';
import router from '@/router';
import { RouterNameEnum } from '@/enum/router';

export type UserType = {
  area: string;
  email: string;
  language: string;
  name: string;
  retrieve_days_limit: number;
  type: 'add-friend' | null;
};

interface UserStore {
  user: UserType | null;
  token: string | null;
  logout(): void;
  login(username: string, password: string): Promise<void>;
}

const useUserStore = create<UserStore>()(
  persist(
    (set, get) => ({
      user: null,
      token: null,
      logout: async () => {
        logout();
        setTimeout(() => {
          router.navigate(`/${RouterNameEnum.LOGIN}`);
          set({ user: null, token: null });
        }, 300);
      },
      login: async (username, password) => {
        try {
          const { data } = await login(username, password);
          const { user, access_token } = data;
          set({ user, token: access_token });
          setTimeout(() => {
            if (user.type === 'add-friend') {
              router.navigate(
                `/${RouterNameEnum.ID_FRIEND}/${RouterNameEnum.ID_FRIEND_UPLOAD_FILES}`,
              );
            } else {
              router.navigate('/');
            }
          }, 300);
        } catch (error) {
          throw error;
        }
      },
    }),
    {
      name: 'user-storage',
      storage: createJSONStorage(() => localStorage),
    },
  ),
);

useUserStore.subscribe((state) => {
  window.token = state.token;
});

const initializeUser = () => {
  const { token } = useUserStore.getState();
  window.token = token;
};
initializeUser();

export default useUserStore;
