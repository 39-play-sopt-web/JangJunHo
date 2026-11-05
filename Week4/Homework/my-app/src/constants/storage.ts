const STORAGE_KEY = {
  AUTH_CODE: "authCode",
  PART: "part",
};

export const getAuthCode = () => {
  return localStorage.getItem(STORAGE_KEY.AUTH_CODE);
};

export const getPart = () => {
  return localStorage.getItem(STORAGE_KEY.PART);
};

export const setAuthCode = (authCode: string) => {
  localStorage.setItem(STORAGE_KEY.AUTH_CODE, authCode);
};

export const setPart = (part: string) => {
  localStorage.setItem(STORAGE_KEY.PART, part);
};
    
export const removeAuthCode = () => {
  localStorage.removeItem(STORAGE_KEY.AUTH_CODE);
};
