import { useEffect, useState } from "react";
import { getMovies } from "../apis/movie";
import type { Movie } from "../types/movieType";
import MovieCard from "../components/MovieCard";

const MovieListPage = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    let ignore = false;

    getMovies(1)
      .then((data) => {
        if (!ignore) setMovies(data.results);
      })
      .catch((error) => {
        console.error("영화 목록을 불러오지 못했습니다.", error);
      });

    return () => {
      ignore = true;
    };
  }, []);

  return (
    <section>
      <h2>영화 둘러보기</h2>
      <ul>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </ul>
    </section>
  );
};

export default MovieListPage;