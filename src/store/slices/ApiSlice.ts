import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { AppThunk, RootState } from "../store";
import { Post, PostsState } from "../../types/Post.type";

const initialState: PostsState = {
    data: [],
    loading: false,
    error: null,
};

const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        fetchPostsStart: (state) => {
            state.loading = true;
            state.error = null;
        },
        fetchPostsSuccess: (state, action: PayloadAction<Post[]>) => {
            state.loading = false;
            state.data = action.payload;
        },
        fetchPostsFailure: (state, action: PayloadAction<string>) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const fetchPosts = (): AppThunk => async (dispatch) => {
    try {
        dispatch(fetchPostsStart());
        const response = await axios.get(
            "https://jsonplaceholder.typicode.com/posts"
        );
        dispatch(fetchPostsSuccess(response.data));
    } catch (error) {
        dispatch(fetchPostsFailure("Error fetching posts."));
    }
};

export const {
    fetchPostsStart,
    fetchPostsSuccess,
    fetchPostsFailure,
} = postsSlice.actions;
export const selectPosts = (state: RootState) => state.posts.data;
export default postsSlice.reducer;
