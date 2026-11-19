import EmptyState from "@/ui/EmptyState";
import PostCard from "./PostCard";
import { cookies } from "next/headers";
import setCookieOnReq from "@/utils/setCookieOnReq";
import { getPosts } from "@/services/postServices";
import Pagination from "@/ui/Pagination";
async function PostList({ queries, search }) {
  const cookieStore = await cookies();
  const options = setCookieOnReq(cookieStore);
  const { posts, totalPages } = await getPosts(queries, options);
  return (
    <div className="mb-12">
      {search && (
        <div className="mb-6 text-secondary-700">
          {posts.length > 0 ? (
            <>
              {`نشان دادن ${posts.length} نتیجه برای `}
              <span className="font-bold">&quot;{search}&quot;</span>
            </>
          ) : null}
        </div>
      )}
      {posts.length === 0 ? (
        <EmptyState description="پستی برای نمایش وجود ندارد." />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-8">
          {posts.map((post) => (
            <PostCard post={post} key={post._id} />
          ))}
        </div>
      )}
      <div className="mt-5 w-full flex justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  );
}

export default PostList;
