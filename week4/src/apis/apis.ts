import { request, HTTPMethod } from "./request";
import { API_ENDPOINT } from "./apiEndpoints";
import type {
  LoginRequest,
  LoginResponse,
  SignUpRequest,
  SignUpResponse,
} from "./types/auth.types";

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
