import { AuthCredentials, AuthSignInResponse } from "@/services/auth/auth.type";
import { coreAxios } from "../core.instance";

const authUrl = "auth";

export const authService = {
  signIn(credentials: AuthCredentials) {
    return coreAxios.post<AuthSignInResponse>(`${authUrl}/local/sign-in`, {
      ...credentials,
    });
  },
};
//   endpoints: (builder) => ({
//     signUp: builder.mutation<AuthCredentials, AuthCredentials>({
//       query: (payload) => ({
//         method: "POST",
//         url: `${authUrl}/local/sign-up`,
//         body: payload,
//       }),
//     }),
//     signIn: builder.mutation<AuthCredentials, AuthCredentials>({
//       query: (payload) => ({
//         method: "POST",
//         url: `${authUrl}/local/sign-in`,
//         body: payload,
//       }),
//     }),
//     signOut: builder.mutation<AuthCredentials, AuthCredentials>({
//       query: (payload) => ({
//         method: "POST",
//         url: `${authUrl}/sign-out`,
//         body: payload,
//       }),
//     }),
//     refresh: builder.mutation<Tokens, Tokens>({
//       query: (payload) => ({
//         method: "POST",
//         url: `${authUrl}/refresh`,
//         body: payload,
//       }),
//     }),
//   }),
//   overrideExisting: false,
// });
