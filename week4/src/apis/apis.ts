import { request, HTTPMethod } from "./request";
import { API_ENDPOINT } from "./apiEndpoints";
import type {
  LoginRequest,
  LoginResponse,
  SignUpRequest,
  SignUpResponse,
} from "./types/auth.types";
import type { GetUserResponse } from "./types/user.types";

export const signUp = async (data: SignUpRequest): Promise<SignUpResponse> => {
  return request<SignUpResponse>({
    method: HTTPMethod.POST,
    url: API_ENDPOINT.SIGN_UP,
    body: data,
  });
};

export const login = async (data: LoginRequest): Promise<LoginResponse> => {
  return request<LoginResponse>({
    method: HTTPMethod.POST,
    url: API_ENDPOINT.LOGIN,
    body: data,
  });
};

export const getUserById = async (id: number): Promise<GetUserResponse> => {
  return request<GetUserResponse>({
    method: HTTPMethod.GET,
    url: API_ENDPOINT.GET_PROFILE(id),
  });
};
