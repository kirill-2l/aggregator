import { authService } from "@/services/auth";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      id: "username-login",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "smith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        if (!credentials?.username || !credentials.password) return null;
        const { username, password } = credentials;
        try {
          const res = await authService.signIn({ username, password });
          return res.data.user;
        } catch (err) {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt(payload) {
      const { token, user } = payload;
      if (user) return { ...token, ...user };

      return token;
    },
    async session(payload) {
      const { session, token } = payload;
      session.user = token.user;
      session.tokens = token.tokens;
      return session;
    },
  },
};
