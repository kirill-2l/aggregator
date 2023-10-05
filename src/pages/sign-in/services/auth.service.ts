import {
  Tokens,
  NextAuthUserCredentials,
} from "@/pages/sign-in/types/auth.type";
import { coreApi } from "../core.api";

const authUrl = "auth";

export const authApi = coreApi.injectEndpoints({
  endpoints: (builder) => ({
    signUp: builder.mutation<NextAuthUserCredentials, NextAuthUserCredentials>({
      query: (payload) => ({
        method: "POST",
        url: `${authUrl}/local/sign-up`,
        body: payload,
      }),
    }),
    signIn: builder.mutation<NextAuthUserCredentials, NextAuthUserCredentials>({
      query: (payload) => ({
        method: "POST",
        url: `${authUrl}/local/sign-in`,
        body: payload,
      }),
    }),
    signOut: builder.mutation<NextAuthUserCredentials, NextAuthUserCredentials>(
      {
        query: (payload) => ({
          method: "POST",
          url: `${authUrl}/sign-out`,
          body: payload,
        }),
      }
    ),
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

export const { useSignUpMutation, useSignInMutation } = authApi;
