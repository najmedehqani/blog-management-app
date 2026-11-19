import http from "./httpService";

export async function createCommentApi(data, options) {
  return http.post("/comment/add", data, options);
}

export async function getAllCommentsApi(options = {}) {
  return http.get("/comment/list", options);
}

export async function deleteCommentApi({ id, options = {} }) {
  return http.delete(`/comment/remove/${id}`, options);
}

export async function updateCommentStatusApi({ id, data }, options = {}) {
  return http.patch(`/comment/update/${id}`, data, options);
}
