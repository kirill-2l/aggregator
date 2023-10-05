import { ReactNode } from "react";
import { Provider } from "react-redux";
import { ReducersMapObject, configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {},
  devTools: process.env.NODE_ENV === "development",
});

export const StoreProvider = ({ children }: { children: React.ReactNode }) => {
  return <Provider store={store}>{children}</Provider>;
};
