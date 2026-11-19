import { HeartIcon, BookmarkIcon } from "@heroicons/react/24/solid";
function HeroVisual() {
  return (
    <div className="relative w-full max-w-md mx-auto select-none my-4 sm:my-6">
      {/* بدنه اصلی پنل / مانیتور */}
      <div
        className="rounded-2xl p-4 sm:p-5 shadow-2xl border bg-secondary-0 border-secondary-200 
            text-secondary-900"
      >
        {/* نوار بالای پنل */}
        <div className="flex items-center justify-between pb-3 border-b mb-4 border-secondary-200">
          <div className="flex gap-1.5 [direction:ltr]">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500 inline-block"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block"></span>
          </div>
          <span className="font-bold text-xs tracking-wide text-secondary-500">
            Blog Management Application
          </span>
        </div>

        {/* بخش خوش‌آمدگویی داخلی */}
        <div
          className="p-4 rounded-xl text-center border mb-3 bg-secondary-50 
              border-secondary-100 "
        >
          <p className="text-sm font-bold mb-1 text-secondary-900">
            به اپلیکشن مدیریت بلاگ خوش آمدید
          </p>
          <p className="text-xs text-secondary-500">فضای نوشتن و انتشار</p>
        </div>

        {/* کارت‌های دسته‌بندی */}
        <div
          className="grid grid-cols-3 gap-1.5 sm:gap-2 text-center text-[10px] sm:text-[11px]
             font-medium"
        >
          {[
            "برنامه‌نویسی",
            "فرهنگی",
            "اقتصادی",
            "ورزشی",
            "تاریخی",
            "جغرافیا",
          ].map((cat, idx) => (
            <div
              key={idx}
              className="py-2 px-1 rounded-lg border truncate bg-primary-50 border-primary-200 
                  text-primary-900"
            >
              {cat}
            </div>
          ))}
        </div>
      </div>

      {/* کارت شناور ۱: آیکون لایک و بوک‌مارک */}
      <div
        className="absolute -top-4 left-2 lg:-top-5 lg:-left-4 p-2.5 sm:p-3 rounded-xl
             shadow-xl border flex items-center gap-3 sm:gap-4 z-10 animate-hero-float 
              bg-secondary-0 border-secondary-200 text-secondary-900"
      >
        <div className="flex items-center gap-1.5">
          <HeartIcon className="w-4 h-4 sm:w-5 sm:h-5 text-red-500" />
          <span className="font-bold text-xs sm:text-sm">۱۲۵</span>
        </div>

        <div className="w-px h-4 sm:h-5 bg-secondary-200"></div>

        <div className="flex items-center gap-1.5">
          <BookmarkIcon className="w-4 h-4 sm:w-5 sm:h-5 text-primary-800" />
          <span className="font-bold text-xs sm:text-sm">۶۵</span>
        </div>
      </div>

      {/* کارت شناور ۲: آخرین دیدگاه */}
      <div
        className="absolute -bottom-9 right-2 lg:-right-6 p-2.5 sm:p-3 rounded-xl 
            shadow-xl border w-[190px] sm:w-[210px] z-10 animate-hero-float-delayed 
            bg-secondary-0 border-secondary-200 text-secondary-900"
      >
        <span className="font-bold text-[9px] sm:text-[10px] block mb-1.5 sm:mb-2 text-secondary-500">
          آخرین دیدگاه
        </span>

        <div className="flex items-center gap-1.5 sm:gap-2 min-w-0">
          <div className="flex items-center shrink-0">
            <div className="w-5 h-5 rounded-full flex items-center justify-center text-[9px] sm:text-[10px] font-bold leading-none bg-primary-200 text-primary-700 border-2 border-secondary-0 z-30">
              س
            </div>
            <div className="w-5 h-5 rounded-full flex items-center justify-center text-[9px] sm:text-[10px] font-bold leading-none bg-primary-200 text-primary-700 border-2 border-secondary-0 -mr-2 z-20">
              ع
            </div>
            <div className="w-5 h-5 rounded-full flex items-center justify-center text-[9px] sm:text-[10px] font-bold leading-none bg-primary-200 text-primary-700 border-2 border-secondary-0 -mr-2 z-10">
              ر
            </div>
          </div>
          <p className="text-[10px] sm:text-[11px] truncate min-w-0 text-secondary-900">
            <span className="font-semibold">سارا:</span> مقاله Next.js عالی بود!
          </p>
        </div>
      </div>
    </div>
  );
}

export default HeroVisual;
