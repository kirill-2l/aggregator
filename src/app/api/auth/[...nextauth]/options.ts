import { authService, useSignInMutation } from "@/services/auth";
import nextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { useAppDispatch } from "@/providers/store/store-provider";
export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        if (!credentials?.username || !credentials.password) return null;
        const { username, password } = credentials;
        const res = await fetch();
        const user = authService.endpoints.signIn.initiate(credentials);
        return user || null;
      },
    }),
  ],
  x,
};
