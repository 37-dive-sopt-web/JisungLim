export const API_ENDPOINT = {
    SIGN_UP: '/api/v1/users', // 회원가입
    LOGIN: '/api.v1/auth/login', // 로그인
    GET_PROFILE: (id: number) => `/api/v1/users/${id}`, // 개인정보 조회
    UPDATE_PROFILE: (id: number) => `/api/v1/users/${id}`, // 개인정보 수정
    DELTE_ACCOUNT: (id: number) => `/api/v1/users/${id}`, // 회원 탈퇴
} as const;