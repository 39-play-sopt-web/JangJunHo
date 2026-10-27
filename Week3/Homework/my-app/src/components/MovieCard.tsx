import { Link } from "react-router";
import type { Movie } from "../types/movieType";
import { IMAGE_BASE_URL } from "../constants/image";

interface MovieCardProps {
  movie: Movie;
}

const MovieCard = ({ movie }: MovieCardProps) => {
  return (
    <li>
      <Link to={`/movie/${movie.id}`}>
        <p>★ {movie.vote_average.toFixed(1)}</p>
        {movie.poster_path && (
          <img src={`${IMAGE_BASE_URL}/w500${movie.poster_path}`} alt={movie.title} width={150} />
        )}
        <h3>{movie.title}</h3>
        <p>{movie.release_date}</p>
        <p>{movie.overview || "줄거리 정보가 없어요."}</p>
      </Link>
    </li>
  );
};

export default MovieCard;