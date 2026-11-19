import { Suspense } from "react";
import StatCardsSkeleton from "./_components/StatCardsSkeleton";
import PostsTableSkeleton from "./_components/PostsTableSkeleton";
import LatestPosts from "./_components/LatestPosts";
import WellcomeMessage from "./_components/WellcomeMessage";
import Link from "next/link";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import CardsWrapper from "./_components/CardsWrapper";
export const metadata = {
  title: "داشبورد",
};
async function Profile() {
  return (
    <div>
      <WellcomeMessage />
      <h1 className="font-bold text-xl lg:text-2xl text-secondary-700 mb-8">
        آمار کلی
      </h1>
      <Suspense fallback={<StatCardsSkeleton />}>
        <CardsWrapper />
      </Suspense>
      <div className="w-full border-t border-t-secondary-300 my-8"></div>
      <div className="flex flex-col gap-y-1 lg:flex-row lg:justify-between mb-4">
        <h2 className="text-xl text-secondary-700 font-bold mb-1">آخرین پست ها</h2>
        <Link
          href="/profile/posts"
          className="text-secondary-700 font-bold text-sm transition-all duration-200 hover:text-primary-900 flex items-center gap-x-1"
        >
          <span>مشاهده همه پست ها</span>
          <ArrowLeftIcon className="w-5 h-5" />
        </Link>
      </div>
      <Suspense fallback={<PostsTableSkeleton />}>
        <LatestPosts />
      </Suspense>
    </div>
  );
}

export default Profile;
