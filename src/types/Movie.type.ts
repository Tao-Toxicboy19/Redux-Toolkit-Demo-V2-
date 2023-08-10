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