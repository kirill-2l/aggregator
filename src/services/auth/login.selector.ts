import { RootState } from "@/providers/store/store-provider";

export const getLoginUsername = (state: RootState) =>
  state.login.username || "";

export const getLoginPassword = (state: RootState) =>
  state.login.password || "";
