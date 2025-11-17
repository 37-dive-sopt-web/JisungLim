import { request, HTTPMethod } from "./request";
import { API_ENDPOINT } from "./apiEndpoints";
import type {
  LoginRequest,
  LoginResponse,
  SignUpRequest,
  SignUpResponse,
} from "./types/auth.types";
import type {
  GetUserResponse,
  UpdateUserRequest,
  UpdateUserResponse,
} from "./types/user.types";

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

export const updateProfile = async (
  id: number,
  data: UpdateUserRequest
): Promise<UpdateUserResponse> => {
  return request<UpdateUserResponse>({
    method: HTTPMethod.PATCH,
    url: API_ENDPOINT.UPDATE_PROFILE(id),
    body: data,
  });
};

export const deleteAccount = async (id: number): Promise<void> => {
  return request<void>({
    method: HTTPMethod.DELETE,
    url: API_ENDPOINT.DELETE_ACCOUNT(id),
  });
};
