import { Suspense } from "react";
import PostsTableSkeleton from "../_components/PostsTableSkeleton";
import Search from "@/ui/Search";
import { CreatePost } from "./-/components/Buttons";
import queryString from "query-string";
import { getPosts } from "@/services/postServices";
import Pagination from "@/ui/Pagination";
import PostsTable from "./-/components/PostsTable";
export const metadata = {
  title: "پست ها",
};
async function page({ searchParams }) {
  const search = await searchParams;
  const query = queryString.stringify(search);
  const { totalPages } = await getPosts(query);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-7 gap-8 text-secondary-700 mb-12 items-center">
        <h1 className="font-bold text-xl col-span-2">لیست پست ها</h1>
        <div className="col-span-3">
          <Suspense
            fallback={
              <div className="search h-[58px] rounded-3xl bg-secondary-100 animate-pulse" />
            }
          >
            <Search className="lg:w-[460px] lg:focus-within:w-[480px]" />
          </Suspense>
        </div>
        <CreatePost />
      </div>
      <Suspense fallback={<PostsTableSkeleton rows={8} />} key={query}>
        <PostsTable query={query} />
      </Suspense>
      <div className="mt-5 w-full flex justify-center">
        <Suspense fallback={null}>
          <Pagination totalPages={totalPages} />
        </Suspense>
      </div>
    </div>
  );
}

export default page;
