import axios from "axios";

export const coreInstance = axios.create({
  baseURL: `${process.env.BACKEND_URL}/api/v1`,
  headers: {
    "Content-Type": "application/json",
  },
});
