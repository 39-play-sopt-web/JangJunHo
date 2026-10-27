// 목록의 영화 한개
export interface Movie {
  id: number;
  title: string;
  poster_path: string | null;
  release_date: string;
  overview: string;
  vote_average: number;
}

// 목록 응답 전체
export interface MovieListResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

// 상세 응답
export interface MovieDetail extends Movie {
  backdrop_path: string | null;
  genres: { id: number; name: string }[];
  runtime: number | null;
  vote_count: number;
  status: string;
  original_title: string;
  original_language: string;
  production_countries: { iso_3166_1: string; name: string }[];
  spoken_languages: { iso_639_1: string; english_name: string; name: string }[];
  budget: number;
  revenue: number;
}