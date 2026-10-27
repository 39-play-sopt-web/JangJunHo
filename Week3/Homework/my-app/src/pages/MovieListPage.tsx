import { useEffect, useState } from "react";
import { getMovies } from "../apis/movie";
import type { Movie } from "../types/movieType";
import MovieCard from "../components/MovieCard";
import { STAR_FILTERS } from "../constants/star";

const MovieListPage = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [filter, setFilter] = useState(STAR_FILTERS[0]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const data = await getMovies(1, filter.gte, filter.lte);
        setMovies(data.results);
      } catch (error) {
        console.error("영화 목록을 불러오지 못했습니다.", error);
      }
    };
    fetchMovies();
  }, [filter]);

  return (
    <section>
      <h2>영화 둘러보기</h2>

      <div>
        {STAR_FILTERS.map((item) => (
          <button
            key={item.label}
            type="button"
            aria-pressed={item.label === filter.label}
            onClick={() => setFilter(item)}
          >
            {item.label}
          </button>
        ))}
      </div>

      <ul>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </ul>
    </section>
  );
};

export default MovieListPage;