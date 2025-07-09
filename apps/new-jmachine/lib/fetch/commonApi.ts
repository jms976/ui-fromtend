/* eslint-disable @typescript-eslint/no-explicit-any */

export type ApiResponse<TResult> = {
  code: string;
  data: TResult;
  message: string;
  timestamp: number;
};

export type RequestOptions = {
  baseUrl?: string;
  getCookieHeader?: () => Promise<string | undefined>;
  extraHeaders?: Record<string, string>;
};

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';

export async function request<TResult = any, TBody = Record<string, any>>(
  path: string,
  params?: TBody,
  method: HttpMethod = 'POST',
  options?: RequestOptions,
): Promise<Partial<ApiResponse<TResult>>> {
  const { baseUrl = '', getCookieHeader, extraHeaders = {} } = options || {};

  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    ...extraHeaders,
  };

  if (getCookieHeader) {
    const cookie = await getCookieHeader();

    if (cookie) {
      headers.Cookie = cookie;
    }
  }

  const res = await fetch(`${baseUrl}/api${path}`, {
    method,
    headers,
    body: ['GET', 'HEAD'].includes(method) ? undefined : params ? JSON.stringify(params) : undefined,
    cache: options?.baseUrl ? 'no-store' : undefined,
  });

  const response = await res.json();

  if (response.code !== '000000') {
    throw new Error(response.message ?? 'API Error');
  }

  return response;
}

type FetchApi = {
  <TResult = any, TBody = Record<string, any>>(
    path: string,
    params?: TBody,
    method?: HttpMethod,
  ): Promise<Partial<ApiResponse<TResult>>>;

  get<TResult = any>(path: string): Promise<Partial<ApiResponse<TResult>>>;
  post<TResult = any, TBody = Record<string, any>>(
    path: string,
    params?: TBody,
  ): Promise<Partial<ApiResponse<TResult>>>;
  put<TResult = any, TBody = Record<string, any>>(path: string, params?: TBody): Promise<Partial<ApiResponse<TResult>>>;
  del<TResult = any, TBody = Record<string, any>>(path: string, params?: TBody): Promise<Partial<ApiResponse<TResult>>>;
  patch<TResult = any, TBody = Record<string, any>>(
    path: string,
    params?: TBody,
  ): Promise<Partial<ApiResponse<TResult>>>;
};

export function createFetchApi(options?: RequestOptions): FetchApi {
  const fetchFn = (path: string, params?: any, method: HttpMethod = 'POST') => request(path, params, method, options);

  fetchFn.get = (path: string) => request(path, undefined, 'GET', options);
  fetchFn.post = (path: string, params?: any) => request(path, params, 'POST', options);
  fetchFn.put = (path: string, params?: any) => request(path, params, 'PUT', options);
  fetchFn.del = (path: string, params?: any) => request(path, params, 'DELETE', options);
  fetchFn.patch = (path: string, params?: any) => request(path, params, 'PATCH', options);

  return fetchFn as FetchApi;
}
