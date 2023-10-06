import { coreBaseQuery } from "@/services/core.instance";
import { createApi } from "@reduxjs/toolkit/query/react";

export const coreApi = createApi({
  reducerPath: "api",
  baseQuery: coreBaseQuery,
  endpoints: () => ({}),
});
