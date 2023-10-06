import { Tokens, AuthCredentials } from "@/services/auth/auth.type";
import { coreApi } from "@/services/core.api";

const authUrl = "auth";

export const authService = coreApi.injectEndpoints({
  endpoints: (builder) => ({
    signUp: builder.mutation<AuthCredentials, AuthCredentials>({
      query: (payload) => ({
        method: "POST",
        url: `${authUrl}/local/sign-up`,
        body: payload,
      }),
    }),
    signIn: builder.mutation<AuthCredentials, AuthCredentials>({
      query: (payload) => ({
        method: "POST",
        url: `${authUrl}/local/sign-in`,
        body: payload,
      }),
    }),
    signOut: builder.mutation<AuthCredentials, AuthCredentials>({
      query: (payload) => ({
        method: "POST",
        url: `${authUrl}/sign-out`,
        body: payload,
      }),
    }),
    refresh: builder.mutation<Tokens, Tokens>({
      query: (payload) => ({
        method: "POST",
        url: `${authUrl}/refresh`,
        body: payload,
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useSignInMutation } = authService;
export const { middleware } = authService;
