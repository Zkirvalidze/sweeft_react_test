export interface IUser {
  id: number;
  name: string;
  lastName: string;
  prefix: string;
  title: string;
  imageUrl: string;
}

export interface IUserDetails extends IUser {
  jobDescriptor: string;
  jobArea: string;
  jobType: string;
  email: string;
  ip: string;
  company: {
    name: string;
    suffix: string;
  };
  address: {
    zipCode: string;
    city: string;
    streetAddress: string;
    country: string;
    state: string;
  };
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

export interface IFetchPropType {
  page: number;
  size: number;
}
export interface IgetFullUserResponse {
  user: IUserDetails;
}

export type IParamsWithId = {
  id: string;
};
