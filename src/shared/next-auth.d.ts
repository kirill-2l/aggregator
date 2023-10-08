import NextAuth from "next-auth/next";
import { User } from "@/entities/user";
import { JwtToken } from "@/shared/types";

declare module "next-auth" {
  interface Session {
    user: User;
    tokens: JwtToken;
  }
}
