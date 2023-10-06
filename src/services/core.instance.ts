import { fetchBaseQuery } from "@reduxjs/toolkit/query";

export const coreBaseQuery = fetchBaseQuery({
  baseUrl: `${process.env.NEXT_PUBLIC_CLIENT_API_ENDPOINT}/api/v1`,
  headers: {
    "Content-Type": "application/json",
  },
});
