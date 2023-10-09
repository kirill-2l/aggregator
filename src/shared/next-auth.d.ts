import NextAuth from "next-auth/next";
import { User } from "@/entities/user";
import { JwtToken } from "@/shared/types";
import { AuthSignInResponse } from "@/services/auth";

declare module "next-auth" {
  interface Session {
    user: User;
    tokens: JwtToken;
  }
}

import JWT from "next-auth/jwt";
declare module "next-auth/jwt" {
  interface JWT {
    user: User;
    tokens: JwtToken;
  }
}
