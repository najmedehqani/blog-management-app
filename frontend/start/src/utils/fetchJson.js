import { BASE_URL } from "@/constants/api";

// Native-fetch reads (public and server-side) share the backend's
// `{ data: <payload> }` envelope with httpService. Returns the unwrapped payload
// so callers work with the same shape regardless of transport.
export async function fetchJson(path, options = {}) {
  const res = await fetch(`${BASE_URL}${path}`, options);
  const json = await res.json();
  return json?.data;
}
