export type UserId = string;

export interface User {
  id: UserId;
  username: string;
}

export interface UserSchema {
  user: User | null;
  _inited: boolean;
}
