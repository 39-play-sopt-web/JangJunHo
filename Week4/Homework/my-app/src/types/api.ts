export interface ApiResponse<T> {
  data: T;
  message: string;
  code: string;
  isSuccess: boolean; // 오타수정
}