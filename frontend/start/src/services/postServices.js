import { fetchJson } from "@/utils/fetchJson";
import http from "./httpService";

export async function getPostBySlug(slug) {
  const data = await fetchJson(`/post/slug/${slug}`);
  return data?.post;
}

export async function getPosts(queries = "", options = {}) {
  const data =
    (await fetchJson(`/post/list?${queries}`, {
      cache: "no-store",
      ...options,
    })) || {};
  if (!data?.posts || data?.totalPages == null) {
    throw new Error("Failed to fetch posts");
  }
  const { posts, totalPages } = data;
  return { posts, totalPages };
}

export async function likePostApi(postId) {
  return http.post(`/post/like/${postId}`);
}

export async function bookmarkPostApi(postId) {
  return http.post(`/post/bookmark/${postId}`);
}

export async function createPostApi(data) {
  return http.post(`/post/create`, data);
}

export async function editPostApi({ id, data }) {
  return http.patch(`/post/update/${id}`, data);
}

export async function getPostById(id) {
  return http.get(`/post/${id}`);
}

export async function deletePostApi({ id, options }) {
  return http.delete(`/post/remove/${id}`, options);
}
