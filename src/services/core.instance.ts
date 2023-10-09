import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import axios from "axios";

export const coreRtkBaseQuery = fetchBaseQuery({
  baseUrl: `${process.env.NEXT_PUBLIC_CLIENT_API_ENDPOINT}/api/v1`,
  headers: {
    "Content-Type": "application/json",
  },
});

export const coreAxios = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_CLIENT_API_ENDPOINT}/api/v1`,
  headers: {
    Accept: "application/json",
  },
});
