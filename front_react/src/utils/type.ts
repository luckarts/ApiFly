export interface IResponse<T = any> {
  data: T;
  status: number;
}

export interface IStatusCodesList {
  [key: number]: string;
}

export interface requestProps {
  url: string;
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  headers?: {};
  body?: any;
}
