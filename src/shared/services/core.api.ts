import { coreBaseQuery } from "@/shared/services/core.instance";
import { createApi } from "@reduxjs/toolkit/query/react";

export const coreApi = createApi({
  baseQuery: coreBaseQuery,
  endpoints: () => ({}),
});
