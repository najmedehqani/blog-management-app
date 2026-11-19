import http from "./httpService";

export async function getCategoriesApi(options = {}) {
  return http.get("/category/list", options);
}

export async function deleteCategoryApi({ id, options }) {
  return http.delete(`/category/remove/${id}`, options);
}

export async function editCategoryApi({ id, data }) {
  return http.patch(`/category/update/${id}`, data);
}

export async function createCategoryApi(data) {
  return http.post(`/category/add/`, data);
}
