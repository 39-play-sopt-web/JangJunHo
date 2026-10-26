import { Link, useParams } from "react-router";

const MovieDetailPage = () => {
  const { movieId } = useParams();

  return (
    <section>
      <Link to="/">← 목록으로 돌아가기</Link>
      <h2>영화 상세 (movieId: {movieId})</h2>
    </section>
  );
};

export default MovieDetailPage;