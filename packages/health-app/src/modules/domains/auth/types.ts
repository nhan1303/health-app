export interface ILoginParams {
  username: string;
  password: string;
}

export interface ILoginResponse extends Pick<ILoginParams, "username"> {
  token: string;
}

export interface ILogoutParams {
  token: string | string[];
}

export interface ILogoutResponse {}

export interface IAuthUser {
  username: string;
}
