import { Movie } from "./Movie.type"

export interface MovieState {
    movie: Movie[]
    loading: boolean
    error: string | null
}