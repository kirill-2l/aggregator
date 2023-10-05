import { fetchBaseQuery } from "@reduxjs/toolkit/query";

export const coreBaseQuery = fetchBaseQuery({
  baseUrl: `${process.env.BACKEND_URL}/api/v1`,
  headers: {
    "Content-Type": "application/json",
  },
});
