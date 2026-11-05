import axios from "axios";
import { getAuthCode } from "../constants/storage";

// 게시판 API 기본 설정
export const instance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

// 요청 보내기 직전에 인증 코드를 헤더에 넣기
instance.interceptors.request.use((config) => {
  const authCode = getAuthCode();
  if (authCode) {
    config.headers.Authorization = authCode;
  }
  return config;
});
