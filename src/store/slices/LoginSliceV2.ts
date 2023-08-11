import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { AppThunk, RootState } from "../store";

export interface user {
    _id: string
    first_name: string
    last_name: string
    email: string
    password: string
}

export interface userState {
    user: user[]
    status: boolean
    loading: boolean
    error: string | null
}

const initialState: userState = {
    user: [],
    status: false,
    loading: false,
    error: null
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        fetchUserStart: (state) => {
            state.loading = true
            state.status = false
            state.error = null
        },
        fetchUserSuccess: (state, action: PayloadAction<user[]>) => {
            state.user = action.payload
            state.loading = false
            state.status = true
        },
        fetchUserFailure: (state, action: PayloadAction<string>) => {
            state.loading = false
            state.status = false
            state.error = action.payload
        }
    }
})

export const fetchUser = (): AppThunk => async (dispatch) => {
    try {
        dispatch(fetchUserStart());
        const response = await axios.get(
            "https://www.omdbapi.com/?apikey=2b97f022&s=car&type=movie"
        );
        dispatch(fetchUserSuccess(response.data.Search));
    } catch (error) {
        dispatch(fetchUserFailure("Error fetching movies."));
    }
};
export const {
    fetchUserStart,
    fetchUserSuccess,
    fetchUserFailure,
} = userSlice.actions;
export const selectMovieState = (state: RootState) => state.movie;
export default userSlice.reducer;