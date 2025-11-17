// 회원가입
export interface SignUpRequest {
  username: string;
  password: string;
  name: string;
  email: string;
  age: number;
}

export interface SignUpResponse {
  id: number;
  username: string;
  name: string;
  email: string;
  age: number;
  status: string;
}

// 로그인
export interface LoginRequest {
  username: string;
  password: string;
}

export interface LoginResponse {
  userId: number;
  message: string;
}
