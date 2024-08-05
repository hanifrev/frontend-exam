import { Follow } from './follows.types';

export interface SearchQueryParams {
  pageSize: number | string;
  keyword: string;
}

export interface UsersResponse {
  map: any;
  data: Follow;
  total: number;
  page: number;
  pageSize: number;
}
