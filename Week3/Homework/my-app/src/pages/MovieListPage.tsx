import { useEffect, useRef, useState } from "react";
import { getMovies } from "../apis/movie";
import type { Movie } from "../types/movieType";
import MovieCard from "../components/MovieCard";
import { STAR_FILTERS } from "../constants/star";

const MovieListPage = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [filter, setFilter] = useState(STAR_FILTERS[0]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const bottomRef = useRef<HTMLDivElement>(null);

  // 필터나 페이지가 바뀌면 영화 불러오기
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const data = await getMovies(page, filter.gte, filter.lte);
        if (page === 1) {
          setMovies(data.results);
        } else {
          setMovies((prev) => [...prev, ...data.results]);
        }
        setHasMore(page < data.total_pages);
      } catch (error) {
        console.error("영화 목록을 불러오지 못했습니다.", error);
      }
    };
    fetchMovies();
  }, [filter, page]);

  // 무한 스크롤
  useEffect(() => {
    if (!bottomRef.current || movies.length === 0) return;

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setPage((prev) => prev + 1);
      }
    });
    observer.observe(bottomRef.current);

    return () => observer.disconnect();
  }, [movies]);

  return (
    <section>
      <h2>영화 둘러보기</h2>

      <div>
        {STAR_FILTERS.map((item) => (
          <button
            key={item.label}
            aria-pressed={item.label === filter.label}
            onClick={() => {
              setFilter(item);
              setPage(1);
              setMovies([]);
            }}
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

      {hasMore && <div ref={bottomRef}>불러오는 중...</div>}
    </section>
  );
};

export default MovieListPage;