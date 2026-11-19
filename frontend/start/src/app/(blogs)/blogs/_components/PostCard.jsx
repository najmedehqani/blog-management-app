import Link from "next/link"
import CoverImage from "./CoverImage"
import Author from "./Author"
import { PiClock } from "react-icons/pi"
import { toPersianDigits } from "@/utils/numberFormatter"
import PostInteraction from "./PostInteraction"

function PostCard({post}) {
  return (
    <div
          className="col-span-1 sm:col-span-6 xl:col-span-4 border border-secondary-300 rounded-2xl
          overflow-hidden bg-secondary-0 shadow-[0_2px_12px_rgba(0,0,0,0.06)] hover:shadow-[0_6px_19px_rgba(0,0,0,0.1)]  
          dark:shadow-[0_2px_12px_rgba(0,0,0,0.2)] dark:hover:shadow-[0_6px_19px_rgba(0,0,0,0.3)] transition-shadow duration-200 ease-out "
          key={post._id}
        >
          <CoverImage {...post} />
          <div className="p-4">
            <Link href={`/blogs/${post.slug}`}>
              <h2 className="mb-4 text-secondary-700 font-semibold hover:text-primary-900">
                {post.title}
              </h2>
            </Link>
            <div className="flex items-center justify-between mb-4">
              <Author {...post.author} />
              <div className="flex items-center text-secondary-500 text-[10px]">
                <PiClock className="w-4 h-4 text-secondary-500 ml-1" />
                <span className="ml-1">خواندن :</span>
                <span className="ml-1 leading-3">
                  {toPersianDigits(post.readingTime)}
                </span>
                <span>دقیقه</span>
              </div>
            </div>
            <PostInteraction post={post} />
          </div>
        </div>
  )
}

export default PostCard