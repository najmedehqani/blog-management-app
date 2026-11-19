import { Suspense } from "react";
import Search from "@/ui/Search";

function SearchSection() {
  return (
    <div className="flex flex-col justify-center items-center mt-28 md:mt-40 mb-24 md:mb-32">
      <div className=" mb-6">
        <h2 className="font-black text-2xl md:text-3xl text-secondary-700 mb-2">
          جستجو در وبلاگ‌ها
        </h2>
        <p className="text-secondary-500 text-xs md:text-sm text-center">
          پست‌های مورد نظرت را پیدا کن.
        </p>
      </div>
      <Suspense
        fallback={
          <div className="search h-[58px] rounded-3xl bg-secondary-100 animate-pulse" />
        }
      >
        <Search className="search" pathname="/blogs" />
      </Suspense>
    </div>
  );
}

export default SearchSection;
