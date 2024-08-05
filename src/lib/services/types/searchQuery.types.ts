interface SearchQueryParams {
  pageSize: number | string;
  keyword: string;
}

interface UsersResponse {
  map: any;
  data: Follows;
  total: number;
  page: number;
  pageSize: number;
}
