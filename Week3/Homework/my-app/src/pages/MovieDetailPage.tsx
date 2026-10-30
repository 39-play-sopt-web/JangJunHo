import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getMovieDetail } from "../apis/movie";
import type { MovieDetail } from "../types/movieType";
import { IMAGE_BASE_URL } from "../constants/image";
import * as S from "../styles/MovieDetailPage.styles";

const MovieDetailPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState<MovieDetail | null>(null);

  useEffect(() => {
    const fetchMovie = async () => {
      if (!movieId) return;
      try { /* TMDB api로 불러오고 실패시 에러 처리 */
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
    <S.Wrapper>
      <S.BackLink to="/">← 목록으로 돌아가기</S.BackLink>

      {movie.backdrop_path && (
        <S.Backdrop src={`${IMAGE_BASE_URL}/w1280${movie.backdrop_path}`} alt="" />
      )}

      {/* 왼쪽 포스터, 오른쪽 주요 정보 */}
      <S.Top>
        {movie.poster_path && (
          <S.Poster src={`${IMAGE_BASE_URL}/w500${movie.poster_path}`} alt={movie.title} />
        )}
        <div>
          <S.Title>{movie.title}</S.Title>
          <p>개봉일: {movie.release_date}</p>
          <p>장르: {movie.genres.map((genre) => genre.name).join(", ")}</p>
          <p>평점: ★ {movie.vote_average.toFixed(1)}</p>
          <p>러닝타임: {movie.runtime ? `${movie.runtime}분` : "정보 없음"}</p>
          <p>투표 수: {movie.vote_count.toLocaleString()}</p>
          <p>상태: {movie.status}</p>
        </div>
      </S.Top>

      <S.SubTitle>줄거리</S.SubTitle>
      <p>{movie.overview || "줄거리 정보가 없어요."}</p>

      <S.SubTitle>기본 정보</S.SubTitle>
      <p>원제: {movie.original_title}</p>
      <p>원어: {movie.original_language}</p>
      <p>제작 국가: {movie.production_countries.map((country) => country.name).join(", ")}</p>
      <p>사용 언어: {movie.spoken_languages.map((language) => language.name || language.english_name).join(", ")}</p>
      <p>제작비: {movie.budget ? `$${movie.budget.toLocaleString()}` : "정보 없음"}</p>
      <p>수익: {movie.revenue ? `$${movie.revenue.toLocaleString()}` : "정보 없음"}</p>
    </S.Wrapper>
  );
};

export default MovieDetailPage;