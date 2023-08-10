import { Post } from "./Post.type";

export interface PostsState {
    data: Post[];
    loading: boolean;
    error: string | null;
}