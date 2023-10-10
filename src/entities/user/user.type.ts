export type UserId = string;

export interface User {
  id: UserId;
  name: string;
  email: string;
}

export interface UserSchema {
  user: User | null;
  _inited: boolean;
}
