import ky from 'ky';

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const apiClient = ky.create({
  prefixUrl: BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
  retry: {
    limit: 2,
    methods: ['get', 'post', 'patch', 'delete'],
    statusCodes: [408, 413, 429, 500, 502, 503, 504], // 해당 HTTP status code일 시 재시도
  },
  hooks: {
    beforeRequest: [
      (request) => {
        // TODO: 인증 토큰 필요 시 추가
      },
    ],
    afterResponse: [
      async (request, options, response) => {
        // TODO: 필요 시 추가
        // 응답 후 처리
        if (!response.ok) {
          const error = await response.json().catch(() => ({}));
          console.error('API Error:', error);
        }
        return response;
      },
    ],
  },
});
