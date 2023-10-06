export interface AuthCredentials {
  password: string;
  username: string;
}

export interface LoginSchema extends AuthCredentials {
  isLoading: boolean;
  error?: string;
}

export interface Tokens {
  access_token: string;
  refresh_token: string;
}
