import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface LoginState {
    checkLogin: boolean,
}
const initialState: LoginState = {
    checkLogin: false,
}

export const loginSlice = createSlice({
    name: "checklogin",
    initialState,
    reducers: {
        login: (state) => {
            state.checkLogin = false
        },
        logout: (state) => {
            state.checkLogin = true
        },
        chLogin: (state, action: PayloadAction<boolean>) => {
            state.checkLogin = action.payload
        }
    }
})
export const { login, logout, chLogin } = loginSlice.actions
export const selectLogin = (state: RootState) => state.chlogin.checkLogin;
export default loginSlice.reducer;
