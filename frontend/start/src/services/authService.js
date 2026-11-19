import http from "./httpService";

export async function signupApi(data) {
  return http.post("/user/signup", data);
}

export async function singinApi(data) {
  return http.post("/user/signin", data);
}

export async function getUserApi() {
  return http.get("/user/profile");
}

export async function getAllUsersApi(options) {
  return http.get("/user/list", options);
}

export async function uploadAvatarApi(data) {
  return http.post("user/upload-avatar", data);
}

export async function updateProfileApi(data) {
  return http.patch("user/update", data);
}

export function logoutApi() {
  return http.post(`/user/logout`);
}
