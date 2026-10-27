import { apiClient } from "./apiClient";
import type { MovieDetail, MovieListResponse } from "../types/movieType";

// 영화 목록
export const getMovies = async (page: number) => {
  const res = await apiClient.get<MovieListResponse>("/discover/movie", {
    params: { page },
  });
  return res.data;
};

// 영화 상세
export const getMovieDetail = async (movieId: string) => {
  const res = await apiClient.get<MovieDetail>(`/movie/${movieId}`);
  return res.data;
};