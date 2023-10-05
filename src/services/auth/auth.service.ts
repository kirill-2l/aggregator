import { AxiosInstance } from "axios";
import { Tokens, NextAuthUserCredentials } from "@/axios/auth/auth.model";

const authUrl = "auth";
export const AuthService = (instance: AxiosInstance) => ({
  signUp(payload: NextAuthUserCredentials) {
    return instance.post(`${authUrl}/local/sign-up`, payload);
  },
  signIn(payload: NextAuthUserCredentials): Promise<Tokens> {
    return instance.post(`${authUrl}/local/sign-in`, payload);
  },
  signOut() {
    return instance.post(`${authUrl}/sign-out`);
  },
  refresh(): Promise<Tokens> {
    return instance.post(`${authUrl}/refresh`);
  },
});
