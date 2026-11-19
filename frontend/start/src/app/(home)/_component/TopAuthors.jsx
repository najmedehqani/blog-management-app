"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { usePosts } from "@/hooks/usePosts";
import { useUsers } from "@/hooks/useUsers";
import Image from "next/image";
import { toPersianDigits } from "@/utils/numberFormatter";
import { useMemo, useRef } from "react";
import TopAuthorsSkeleton from "./TopAuthorsSkeleton";
import { Reveal } from "animations/Reveal";

function TopAuthors() {
  const paginationRef = useRef(null);
  const { isLoadingPosts, posts } = usePosts();
  const { isLoadingUsers, users } = useUsers();

  const topAuthors = useMemo(() => {
    if (!posts || !users) return [];

    const postCountByUser = posts.reduce((acc, post) => {
      acc[post.author._id] = (acc[post.author._id] || 0) + 1;
      return acc;
    }, {});
    const MIN_POSTS = 1;
    return users
      .map((user) => ({
        ...user,
        postCount: postCountByUser[user._id] || 0,
      }))
      .filter((user) => user.postCount >= MIN_POSTS)
      .sort((a, b) => b.postCount - a.postCount);
  }, [posts, users]);

  if (isLoadingPosts || isLoadingUsers) return <TopAuthorsSkeleton />;

  return (
    <Reveal>
      <div className="grid gap-8 grid-cols-1 lg:grid-cols-5 items-center mb-20 md:mb-28 lg:mb-32">
        <div className="flex flex-col items-center lg:items-start lg:col-span-2 ">
          <h2 className="text-2xl md:text-3xl font-black text-secondary-700 mb-4">
            نویسندگان فعال بلاگ
          </h2>
          <p
            className="text-secondary-500 leading-relaxed text-base lg:text-lg text-center
           lg:text-right max-w-lg"
          >
            نویسندگانی که در این بلاگ فعالیت دارند و محتوای آن را شکل می‌دهند.
          </p>
        </div>
        <div className="lg:col-span-3">
          <Swiper
            modules={[Pagination, EffectFade]}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            speed={600}
            observer={true}
            observeParents={true}
            onBeforeInit={(swiper) => {
              swiper.params.pagination.el = paginationRef.current;
            }}
            pagination={{
              clickable: true,
            }}
          >
            {topAuthors.map((author) => (
              <SwiperSlide key={author._id}>
                <div
                  className=" bg-secondary-100 p-6 flex flex-col justify-center items-center rounded-xl 
                    max-w-md aspect-video shadow-md dark:shadow-black/30 border border-secondary-100  
                    mx-auto hover:shadow-lg transition-shadow ease-out duration-300 group"
                >
                  <div
                    className="w-28 h-28 rounded-full overflow-hidden mb-4 relative border-2
                     border-primary-400 group-hover:scale-[1.03] 
                     transition-transform ease-out duration-300"
                  >
                    <Image
                      src={author.avatarUrl || "/images/avatar.png"}
                      alt={author.name}
                      fill
                      sizes="112px"
                      className="object-cover "
                    />
                  </div>
                  <p className="font-semibold text-secondary-700 text-center text-xl">
                    {author.name}
                  </p>

                  <span className=" font-semibold text-secondary-500 mt-2">
                    تعداد پست های این نویسنده :{" "}
                    <span className="text-primary-600">
                      {" "}
                      {toPersianDigits(author.postCount)}
                    </span>
                  </span>
                </div>
              </SwiperSlide>
            ))}

            <div
              ref={paginationRef}
              className="mt-5 flex justify-center gap-x-2 custom-pagination"
            ></div>
          </Swiper>
        </div>
      </div>
    </Reveal>
  );
}

export default TopAuthors;
