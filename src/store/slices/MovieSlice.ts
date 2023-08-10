import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { AppThunk, RootState } from "../store";
import { Movie } from "../../types/Movie.type";
import { MovieState } from "../../types/MovieState.type";



const initialState: MovieState = {
    movie: [],
    loading: false,
    error: null,
}

const movieSlice = createSlice({
    name: "movie",
    initialState,
    reducers: {
        fetchMovieStart: (state) => {
            state.loading = true;
            state.error = null;
        },
        fetchMovieSuccess: (state, action: PayloadAction<Movie[]>) => {
            state.loading = false;
            state.movie = action.payload;
        },
        fetchMovieFailure: (state, action: PayloadAction<string>) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const {
    fetchMovieStart,
    fetchMovieSuccess,
    fetchMovieFailure,
} = movieSlice.actions;

export const fetchMovie = (): AppThunk => async (dispatch) => {
    try {
        dispatch(fetchMovieStart());
        const response = await axios.get(
            "https://www.omdbapi.com/?apikey=2b97f022&s=car&type=movie"
        );
        dispatch(fetchMovieSuccess(response.data.Search));
    } catch (error) {
        dispatch(fetchMovieFailure("Error fetching movies."));
    }
};

export const selectMovieState = (state: RootState) => state.movie;
export default movieSlice.reducer;
