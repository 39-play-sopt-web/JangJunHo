import { Link } from "react-router";
import type { Movie } from "../types/movieType";
import { IMAGE_BASE_URL } from "../constants/image";
import * as S from "../styles/MovieCard.styles";

interface MovieCardProps {
  movie: Movie;
}

const MovieCard = ({ movie }: MovieCardProps) => {
  return (
    <S.Card>
      {/* 카드 전체를 누르면 상세 페이지로 이동 */}
      <Link to={`/movie/${movie.id}`}>
        <S.Rating>★ {movie.vote_average.toFixed(1)}</S.Rating>
        {/* 포스터가 없는 영화는 이미지 생략 */}
        {movie.poster_path && (
          <S.Poster src={`${IMAGE_BASE_URL}/w500${movie.poster_path}`} alt={movie.title} />
        )}
        <S.Info>
          <S.Title>{movie.title}</S.Title>
          <S.ReleaseDate>{movie.release_date}</S.ReleaseDate>
          <S.Overview>{movie.overview || "줄거리 정보가 없어요."}</S.Overview>
        </S.Info>
      </Link>
    </S.Card>
  );
};

export default MovieCard;