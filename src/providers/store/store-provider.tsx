import { Provider, useDispatch } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "@/entities/user/user.slice";
import { loginReducer } from "@/services/auth/login.slice";
import { authService } from "@/services/auth";

const store = configureStore({
  reducer: {
    user: userReducer,
    login: loginReducer,
    [authService.reducerPath]: authService.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authService.middleware),
  devTools: process.env.NODE_ENV === "development",
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export const StoreProvider = ({ children }: { children: React.ReactNode }) => {
  return <Provider store={store}>{children}</Provider>;
};
