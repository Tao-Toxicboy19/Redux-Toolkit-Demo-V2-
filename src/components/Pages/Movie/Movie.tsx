import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovie, selectMovieState } from "../../../store/slices/MovieSlice";
import { AppDispatch } from "../../../store/store";

const MoviesComponent: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const movieState = useSelector(selectMovieState);
  useEffect(() => {
    dispatch(fetchMovie());
  }, [dispatch]);

  console.log("Movie State:", movieState.movie); // แสดงค่า state ใน console

  return (
    <div>
      {movieState.loading ? (
        <div>Loading...</div>
      ) : movieState.error ? (
        <div>Error: {movieState.error}</div>
      ) : (
        <div>
          <h1>Movies</h1>
          {/* <ul>
            {movieState.movie.map((movie) => (
              <li key={movie.imdbId}>
                {movie.title} ({movie.year})
              </li>
            ))}
          </ul> */}
          <ul>
            {movieState.movie.map((movie) => (
              <li key={movie.imdbID}>
                {movie.Title} ({movie.Year})
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default MoviesComponent;
