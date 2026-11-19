import {
  LuVolleyball,
  LuLandmark,
  LuBookOpen,
  LuFlag,
  LuGlobe,
  LuBadgeDollarSign,
  LuCodeXml,
} from "react-icons/lu";
import Link from "next/link";
import { getPosts } from "@/services/postServices";
import { toPersianDigits } from "@/utils/numberFormatter";

const categories = [
  { label: "ورزشی", icon: LuVolleyball, slug: "sport" },
  { label: "تاریخی", icon: LuLandmark, slug: "historical" },
  { label: "فرهنگی", icon: LuBookOpen, slug: "cultural" },
  { label: "سیاسی", icon: LuFlag, slug: "political" },
  { label: "جغرافیا", icon: LuGlobe, slug: "geographic" },
  { label: "اقتصادی", icon: LuBadgeDollarSign, slug: "economic" },
  { label: "برنامه نویسی", icon: LuCodeXml, slug: "programming" },
];

async function CategorySection() {
  const { posts } = await getPosts("limit=9999");
  const categoriesWithCount = categories
    .map((cat) => ({
      ...cat,
      count: posts.filter((p) => p.category.slug === cat.slug).length,
    }))
    // Busiest topics lead — the order tells the reader where the writing is.
    .sort((a, b) => b.count - a.count);

  return (
    <section className="mb-20 md:mb-28">
      <div className="mb-8 flex flex-col justify-center items-center gap-y-1">
        <h2 className="font-black text-3xl text-secondary-800">دسته‌بندی ها</h2>
        <p className="text-secondary-500 text-sm">
          یک موضوع را انتخاب کن تا نوشته‌های همان دسته را ببینی.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {categoriesWithCount.map((category) => {
          const Icon = category.icon;
          const isEmpty = category.count === 0;
          return (
            <Link
              key={category.slug}
              href={`/blogs?categorySlug=${category.slug}`}
              className="group block rounded-2xl focus-visible:outline-none"
            >
              <article
                className="h-full flex flex-col items-center gap-y-3 rounded-2xl p-5
                border border-secondary-200/70 bg-secondary-0
                transition-all duration-300 ease-out
                group-hover:-translate-y-1 group-hover:border-primary-500/50
                group-hover:shadow-[0_14px_34px_-16px_rgba(99,102,241,0.55)]
                group-focus-visible:ring-2 group-focus-visible:ring-primary-500
                group-focus-visible:ring-offset-2 group-focus-visible:ring-offset-secondary-50"
              >
                <span
                  className="flex items-center justify-center w-14 h-14 rounded-2xl
                  bg-gradient-to-br from-primary-100 to-primary-200 text-primary-900
                  transition-transform duration-300 ease-out group-hover:scale-105"
                >
                  <Icon className="w-7 h-7" />
                </span>

                <h3 className="font-bold text-center text-sm md:text-base text-secondary-800 transition-colors duration-300 group-hover:text-primary-900">
                  {category.label}
                </h3>

                <p
                  dir="rtl"
                  className={`text-xs ${
                    isEmpty ? "text-secondary-400" : "text-secondary-500"
                  }`}
                >
                  {isEmpty
                    ? "هنوز نوشته‌ای نیست"
                    : `${toPersianDigits(category.count)} پست`}
                </p>
              </article>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

export default CategorySection;
