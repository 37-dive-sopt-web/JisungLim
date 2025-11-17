// 유저 정보 조회
export interface User {
  id: number;
  username: string;
  name: string;
  email: string;
  age: number;
  status: string;
}

// 유저 조회
export interface GetUserResponse extends User {}

// 유저 정보 수정
export interface UpdateUserRequest {
  name: string;
  email: string;
  age: number;
}

export interface UpdateUserResponse extends User {}
