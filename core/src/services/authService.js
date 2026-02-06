import api from "./api";

export const login = (data) => api.post("/users/auth/login/", data);
export const register = (data) => api.post("/users/auth/register/", data);
export const logout = () => api.post("/users/auth/logout/");
export const getProfile = () => api.get("/users/profile/");