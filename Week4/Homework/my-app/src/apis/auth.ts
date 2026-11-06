import {instance} from "./instance";
import type { ApiResponse } from "../types/api";
import type { AuthCodeResponse } from "../types/auth";

export const issueAuthCode = async (part: string) => {
  const res = await instance.post<ApiResponse<AuthCodeResponse>>(
    "/members/authorization-code",
    { part },
  );
  return res.data.data;
};