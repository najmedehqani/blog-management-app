import { BASE_URL } from "@/constants/api";

const { default: axios } = require("axios");

const app = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

app.interceptors.request.use(
  (res) => res,
  (err) => Promise.reject(err),
);

app.interceptors.response.use(
  (res) => res,
  async (err) => {
    const originalConfig = err.config;
    if (
      err?.response?.status === 401 &&
      originalConfig &&
      !originalConfig._retry
    ) {
      originalConfig._retry = true;
      try {
        const { data } = await axios.get(
          `${process.env.NEXT_PUBLIC_BASE_URL}/user/refresh-token`,
          {
            withCredentials: true,
          },
        );
        if (data) return app(originalConfig);
      } catch (error) {
        return Promise.reject(error);
      }
    }
    return Promise.reject(err);
  },
);

// The backend wraps every response as `{ data: <payload>, ... }`. Unwrap it once
// here so services return the payload directly instead of repeating
// `.then(({ data }) => data.data)` on every call. See utils/fetchJson for the
// matching contract on the native-fetch reads.
const unwrap = (request) => request.then((res) => res.data?.data);

const http = {
  get: (...args) => unwrap(app.get(...args)),
  patch: (...args) => unwrap(app.patch(...args)),
  put: (...args) => unwrap(app.put(...args)),
  delete: (...args) => unwrap(app.delete(...args)),
  post: (...args) => unwrap(app.post(...args)),
};

export default http;
