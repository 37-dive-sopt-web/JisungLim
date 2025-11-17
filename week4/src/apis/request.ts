import { HTTPError } from "ky";
import { apiClient } from "./apiClient";

export const HTTPMethod = {
  GET: "GET",
  POST: "POST",
  PUT: "PUT",
  DELETE: "DELETE",
  PATCH: "PATCH",
} as const;

export type HTTPMethodType = (typeof HTTPMethod)[keyof typeof HTTPMethod];
type QueryValue = string | number | boolean; // 이번 과제에는 QueryValue의 타입에 number만 사용됨

export interface RequestConfig {
  method: HTTPMethodType;
  url: string;
  query?: Record<string, QueryValue>;
  body?: Record<string, unknown>;
}

// Error response: { success, code, message, data }
interface ErrorResponse {
  success: false;
  code: string;
  message: string;
  data: {
    code: string;
    message: string;
    errors: Array<{
      field: string;
      value: string;
      reason: string;
    }>;
  };
}

// ky 인스턴스 래퍼 함수
export const request = async <T>(config: RequestConfig): Promise<T> => {
  // T: 응답 성공 시 받는 데이터의 타입 
  const { method, url, query, body } = config;

  try {
    const response = await apiClient(url, {
      method,
      searchParams: query as Record<string, string | number | boolean>,
      json: body,
    }).json<T>(); 

    return response; // 성공 시 정의해둔 T(응답 Data Type)대로 바로 반환
  } catch (error: unknown) {
    if (error instanceof HTTPError) {
      const errorData = await error.response
        .json<ErrorResponse>()
        .catch(() => null);

      const errorMessage = errorData?.message || "에러 메시지 정의 X";

      if (import.meta.env.DEV) {
        console.error(url);
        console.error(errorMessage);
        console.error(errorData?.data.errors);
      }

      throw error;
    }

    if (import.meta.env.DEV) {
      console.error('네트워크 에러');
    }

    throw error;
  }
};
