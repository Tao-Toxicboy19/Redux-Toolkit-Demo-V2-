import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { AppThunk, RootState } from "../store";

export interface Movie {
    Title: string
    Year: string
    imdbID: string
    Type: string
    Poster: string
}

export interface MovieState {
    movie: Movie[]
    loading: boolean
    error: string | null
}

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
        // console.log("API Response:", response.data.Search);
        
        dispatch(fetchMovieSuccess(response.data.Search));
    } catch (error) {
        dispatch(fetchMovieFailure("Error fetching movies."));
    }
};

export const selectMovieState = (state: RootState) => state.movie;
export default movieSlice.reducer;
