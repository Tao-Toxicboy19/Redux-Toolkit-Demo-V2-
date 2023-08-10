import { ThunkAction, configureStore, Action } from "@reduxjs/toolkit";
import loginSlice from "./slices/loginSlice";
import postsReducer from "./slices/ApiSlice";
import movieReducer from "./slices/MovieSlice";

export const store = configureStore({
    reducer: {
        chlogin: loginSlice,
        posts: postsReducer,
        movie: movieReducer,
    },
});

export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>; // ประกาศประเภท AppThunk ที่ใช้กับ Redux Thunk
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

