import Link from "next/link";
import HeroVisual from "./HeroVisual";

function HeroSection() {
  return (
    <div
      className="flex gap-y-11 flex-col-reverse items-center md:flex-row md:gap-x-8 md:justify-between
     mt-12 md:mt-16"
    >
      <div className="text-center md:text-right w-full md:w-1/2">
        <span
          className="inline-flex items-center gap-x-2 text-xs md:text-sm font-medium leading-7
          text-primary-800 bg-primary-100 rounded-full py-2 px-4 mb-5"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-primary-700 shrink-0" />
          فضای نوشتن و انتشار
        </span>
        <h1
          className="font-extrabold text-[28px] sm:text-4xl lg:text-[52px]
         leading-[2] text-secondary-900 mb-3 md:mb-5"
        >
          بنویس، منتشر کن
          <br />
          <span className="text-primary-900 inline-block mt-0 sm:mt-5">
            و تاثیر بگذار
          </span>
        </h1>
        <p className="text-sm md:text-base lg:text-lg leading-8 text-secondary-500 mb-8 max-w-xl mx-auto md:mx-0">
          در این فضا می‌توانی بنویسی، محتوایت را سازماندهی کنی و با دیگران به
          اشتراک بگذاری؛ و همزمان با جامعه‌ای واقعی از نویسندگان در ارتباط باشی.
        </p>
        <div className="flex justify-center md:justify-start items-center gap-x-4">
          <Link
            href="/profile"
            className="btn btn--primary text-sm lg:text-base px-6 font-bold"
            prefetch={false}
          >
            شروع نوشتن
          </Link>
          <Link
            href="/blogs"
            className="btn btn--outline text-sm lg:text-base px-6 font-bold
            !text-primary-900 !border-primary-300 hover:!bg-primary-100 hover:!border-primary-400"
          >
            مطالعه بلاگ‌ها
          </Link>
        </div>
      </div>

      <div className="w-full md:w-1/2">
        <HeroVisual />
      </div>
    </div>
  );
}

export default HeroSection;
