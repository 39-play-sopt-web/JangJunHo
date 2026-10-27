import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import { getMovieDetail } from "../apis/movie";
import type { MovieDetail } from "../types/movieType";
import { IMAGE_BASE_URL } from "../constants/image";

const MovieDetailPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState<MovieDetail | null>(null);

  useEffect(() => {
    const fetchMovie = async () => {
      if (!movieId) return;
      try {
        const data = await getMovieDetail(movieId);
        setMovie(data);
      } catch (error) {
        console.error("영화 정보를 불러오지 못했습니다.", error);
      }
    };
    fetchMovie();
  }, [movieId]);

  // 로딩 문구
  if (!movie) return <p>불러오는 중...</p>;

  return (
    <section>
      <Link to="/">← 목록으로 돌아가기</Link>

      {movie.backdrop_path && (
        <img src={`${IMAGE_BASE_URL}/w1280${movie.backdrop_path}`} alt="" width={600} />
      )}
      {movie.poster_path && (
        <img src={`${IMAGE_BASE_URL}/w500${movie.poster_path}`} alt={movie.title} width={200} />
      )}

      <h2>{movie.title}</h2>
      <p>개봉일: {movie.release_date}</p>
      <p>장르: {movie.genres.map((genre) => genre.name).join(", ")}</p>
      <p>평점: ★ {movie.vote_average.toFixed(1)}</p>
      <p>러닝타임: {movie.runtime ? `${movie.runtime}분` : "정보 없음"}</p>
      <p>투표 수: {movie.vote_count.toLocaleString()}</p>
      <p>상태: {movie.status}</p>

      <h3>줄거리</h3>
      <p>{movie.overview || "줄거리 정보가 없어요."}</p>

      <h3>기본 정보</h3>
      <p>원제: {movie.original_title}</p>
      <p>원어: {movie.original_language}</p>
      <p>제작 국가: {movie.production_countries.map((country) => country.name).join(", ")}</p>
      <p>사용 언어: {movie.spoken_languages.map((language) => language.name || language.english_name).join(", ")}</p>
      <p>제작비: {movie.budget ? `$${movie.budget.toLocaleString()}` : "정보 없음"}</p>
      <p>수익: {movie.revenue ? `$${movie.revenue.toLocaleString()}` : "정보 없음"}</p>
    </section>
  );
};

export default MovieDetailPage;