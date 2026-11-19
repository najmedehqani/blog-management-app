import PostList from "../_components/PostList";
import queryString from "query-string";
import { Suspense } from "react";
import Loading from "./loading";

async function BlogPage({ searchParams }) {
  const res = await searchParams;
  const queries = queryString.stringify(res);
  return (
    <Suspense
      key={queries}
      fallback={<Loading/>}
    >
      <PostList queries={queries} search={res.search} />
    </Suspense>
  );
}
export default BlogPage;


