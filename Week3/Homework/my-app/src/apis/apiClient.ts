import axios from "axios";
// TMDB 요청 공통 설정
export const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  params: {
    api_key: import.meta.env.VITE_API_KEY,
    language: "ko-KR",
  },
});