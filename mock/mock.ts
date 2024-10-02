import { MockMethod, MockConfig } from 'vite-plugin-mock';
import { faker } from '@faker-js/faker';

export default [
  //  登录失败
  // {
  //   url: '/api/login',
  //   method: 'post',
  //   timeout: 2000,
  //   statusCode: 401,
  //   response: (payload) => {
  //     const { username, password } = payload.body;
  //     return {
  //       message: '账号或密码无效',
  //     };
  //   },
  // },
  //  登录成功
  {
    url: '/api/login',
    method: 'post',
    statusCode: 200,
    response: (payload) => {
      return {
        status: 'success',
        message: '\u767b\u9646\u6210\u529f',
        data: {
          access_token:
            'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2lkLWNsb3VkLjE5OTEwMS54eXovYXBpL2xvZ2luIiwiaWF0IjoxNzI2Njg2MjA1LCJleHAiOjE3NTgyMjIyMDUsIm5iZiI6MTcyNjY4NjIwNSwianRpIjoib3U2cjNtcGxHZTNSZFZuQyIsInN1YiI6IjY2ZTk3Mjc2MWJjOTUzNDY1OTAwZDRjZiIsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.gskmEqpNoUHFYRmYZ5-15urmJqyeEiFqdMuR_v3sCqo',
          token_type: 'bearer',
          expires_in: 31536000,
          user: {
            name: '张三李四',
            email: 'eu-zh-wctfe@idcloud.com',
            area: 'EU',
            language: 'zh',
            retrieve_days_limit: 5,
            // type: 'add-friend',
          },
        },
      };
    },
  },
  {
    url: '/api/logout',
    method: 'post',
    timeout: 2000,
    response: {
      code: 0,
      data: {
        name: 'vben',
      },
    },
  },
] as MockMethod[];
