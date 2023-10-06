import { fetchBaseQuery } from "@reduxjs/toolkit/query";

export const coreBaseQuery = fetchBaseQuery({
  baseUrl: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1`,
  headers: {
    "Content-Type": "application/json",
  },
});
