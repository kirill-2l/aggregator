import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User, UserSchema } from "./user.type";
import { authService } from "@/services/auth";

const initialState: UserSchema = {
  user: null,
  _inited: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserData: (state, { payload }: PayloadAction<User>) => {
      state.user = payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      authService.endpoints.signIn.matchFulfilled,
      (state, { payload }) => {
        // state.token = payload.token;
        // state.user = payload.user;
      }
    );
  },
});

// Action creators are generated for each case reducer function
export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
