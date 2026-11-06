import { instance } from "./instance";
import type { ApiResponse } from "../types/api";
import type { Post, PostListResponse, CreatePostRequest, UpdatePostRequest } from "../types/post";

// 게시글 목록 조회
export const getPosts = async (keyword: string) => {
  const response = await instance.get<ApiResponse<PostListResponse>>("/posts", {
    params: { keyword },
  });
  return response.data.data;
};

// 게시글 작성
export const createPost = async (body: CreatePostRequest) => {
  const response = await instance.post<ApiResponse<Post>>("/posts", body);
  return response.data.data;
};

// 게시글 수정
export const updatePost = async (postId: number, body: UpdatePostRequest) => {
  const response = await instance.put<ApiResponse<Post>>(`/posts/${postId}`, body);
  return response.data.data;
};

// 게시글 삭제
export const deletePost = async (postId: number) => {
  const response = await instance.delete<ApiResponse<null>>(`/posts/${postId}`);
  return response.data.data;
};

// 게시글 상세 조회
export const getPost = async (postId: number) => {
  const response = await instance.get<ApiResponse<Post>>(`/posts/${postId}`);
  return response.data.data;
};