import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { API_UTL } from '@/const';
import useUserStore from '@/store/user';

type ApiResponse<T = any> = {
  status: 'success' | 'error';
  message: string;
  errors?: string[];
} & T;

class Api {
  private instance: AxiosInstance;

  constructor() {
    this.instance = axios.create({
      baseURL: API_UTL,
      withCredentials: false,
    });

    this.instance.interceptors.request.use(
      (config) => {
        if (!~config.url.indexOf('login') && window.token) {
          config.headers.Authorization = `Bearer ${window.token}`;
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      },
    );

    this.instance.interceptors.response.use(
      (response) => response,
      (error) => this.handleApiError(error),
    );
  }

  private async handleApiError(error: any): Promise<never> {
    if (error.response) {
      if (error.status === 419) {
        const { logout, token } = useUserStore.getState();
        if (!token) return;
        // 清理本地cookie并触发登出
        logout();
        window.antdApp.message.error({
          content: error.response.data.message,
          key: 'api-error',
          duration: 5,
        });
        return;
      }

      const errorData = error.response.data as ApiResponse;
      if (errorData.status === 'error') {
        const errors = errorData.errors ?? [];
        window.antdApp.message.error({
          content: `${errorData.message} ${errors.join(',')}`,
          key: 'api-error',
          duration: 5,
        });
      }
      throw new Error(errorData.message || 'An error occurred');
    }
    throw error;
  }

  public async get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const response = await this.instance.get<ApiResponse<T>>(url, config);
    return this.handleResponse(response);
  }

  public async post<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
    const response = await this.instance.post<ApiResponse<T>>(url, data, config);
    return this.handleResponse(response);
  }

  private handleResponse<T>(response: AxiosResponse<ApiResponse<T>>): T {
    const { data } = response;
    if (data.status === 'error') {
      throw new Error(data.message || 'An error occurred');
    }

    if (data.message) {
      window.antdApp.message.success({
        content: data.message,
        key: 'api-message',
        duration: 5,
      });
    }
    return data as T;
  }
}

const APIInstance = new Api();

const post: (typeof APIInstance)['post'] = (...args) => {
  return APIInstance.post(...args);
};

const get: (typeof APIInstance)['get'] = (...args) => {
  return APIInstance.get(...args);
};

export { get, post };
