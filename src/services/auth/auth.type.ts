import { User } from "@/entities/user";
import { JwtToken } from "@/shared/types";
import { Token } from "typescript";

export interface AuthCredentials {
  password: string;
  username: string;
}
export interface SingUpRequest {
  name: string;
  email: string;
  password: string;
}
export interface SingUpResponse {
  user: {
    name: string;
    email: string;
    password: string;
  };
  tokens: JwtToken;
}

export interface AuthSignInResponse {
  user: User;
  tokens: JwtToken;
}
