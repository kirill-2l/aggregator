import { coreRtkBaseQuery } from "@/services/core.instance";
import { createApi } from "@reduxjs/toolkit/query/react";

export const coreRtkApi = createApi({
  reducerPath: "api",
  baseQuery: coreRtkBaseQuery,
  endpoints: () => ({}),
});
