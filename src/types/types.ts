export interface IUser {
  id: number;
  name: string;
  lastName: string;
  prefix: string;
  title: string;
  imageUrl: string;
}

interface IPagination {
  previousPage: number | null;
  current: number;
  nextPage: number;
  total: number;  
  pageSize: number;
}

export interface IGetUsersResponse {
  pagination: IPagination;
  list: IUser[];
}
