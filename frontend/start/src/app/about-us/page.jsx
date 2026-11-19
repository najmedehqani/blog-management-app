// import Footer from "@/components/Footer";
// import Header from "@/components/Header";
// export const metadata = {
//   title: {
//     absolute: "درباره ما",
//   },
// };

// export default function AboutPage() {
//   return (
//     <>
//       <Header />
//       <section className="max-w-4xl mx-auto px-4 py-20">
//         <h1 className="text-secondary-700 text-3xl font-bold mb-8">
//           درباره این پروژه
//         </h1>

//         <p className="text-secondary-600 leading-[1.8] mb-10">
//           این وب‌سایت یک پلتفرم بلاگی مبتنی بر <strong>Next.js</strong> است که
//           با هدف پیاده‌سازی سناریوهای واقعی توسعه وب ساخته شده است. این پروژه
//           به‌عنوان یک نمونه‌کار حرفه‌ای، قابلیت‌های اصلی یک بلاگ واقعی را
//           پیاده‌سازی کرده و تجربه‌ای مشابه با محصول واقعی ارائه می‌دهد.
//         </p>

//         <h2 className="text-secondary-700 text-2xl font-semibold mb-4">
//           هدف پروژه
//         </h2>
//         <p className="text-secondary-600 leading-[1.8] mb-10">
//           تمرکز اصلی این پروژه، پیاده‌سازی مفاهیمی مانند مدیریت محتوا، تعامل
//           کاربران و تجربه کاربری در قالب یک سیستم قابل توسعه بوده است. تصمیم‌های
//           فنی با نگاه محصول‌محور و با در نظر گرفتن گسترش‌ پذیری در آینده گرفته
//           شده‌اند.
//         </p>

//         <h2 className="text-secondary-700 text-2xl font-semibold mb-4">
//           قابلیت‌های پیاده‌سازی‌شده
//         </h2>
//         <ul className="list-disc list-inside text-secondary-600 leading-[1.9] mb-10 space-y-2">
//           <li>ثبت‌نام و مدیریت کاربران</li>
//           <li>ایجاد، ویرایش و حذف پست‌ها</li>
//           <li>تعریف و مدیریت دسته‌بندی‌ها</li>
//           <li>لایک و بوکمارک محتوا</li>
//           <li>مدیریت نظرات کاربران</li>
//         </ul>

//         <h2 className="text-secondary-700 text-2xl font-semibold mb-4">
//           رویکرد توسعه
//         </h2>
//         <p className="text-secondary-600 leading-[1.8] mb-10">
//           در توسعه این پروژه، ساختار تمیز کد، خوانایی و قابلیت نگه‌داری در
//           اولویت بوده و معماری پروژه به‌گونه‌ای طراحی شده که توسعه و بهبود آن در
//           آینده به‌سادگی امکان‌پذیر باشد.
//         </p>
//       </section>
//       <Footer />
//     </>
//   );
// }

import Footer from "@/components/Footer";
import Header from "@/components/Header";

export const metadata = {
  title: {
    absolute: "درباره ما",
  },
};

const features = [
  {
    title: "احراز هویت و مدیریت پروفایل",
    description:
      "ثبت‌نام و ورود کاربران، مدیریت اطلاعات پروفایل و تصویر آواتار ",
  },
  {
    title: "جستجو و فیلتر مقالات",
    description:
      "جستجوی مقالات، فیلتر بر اساس چندین دسته‌بندی، مرتب‌سازی بر اساس تاریخ انتشار، محبوبیت و زمان مطالعه و صفحه‌بندی نتایج",
  },
  {
    title: "جزئیات مقالات و تعامل کاربران",
    description:
      "نمایش محتوای کامل مقالات، مشاهده مقالات مرتبط، ثبت لایک و بوک مارک مقالات",
  },
  {
    title: "سیستم نظرات و پاسخ‌ها",
    description: "ثبت نظر برای مقالات، پاسخ به نظرات کاربران",
  },
  {
    title: "داشبورد مدیریت محتوا",
    description:
      "ایجاد، ویرایش و حذف مقالات و دسته‌بندی‌ها،  تغییر وضعیت یا حذف نظرها",
  },
];

const technologies = [
  "Next.js",
  "React",
  "TanStack Query",
  "React Hook Form + Yup",
  "Tailwind CSS",
  "Axios",
  "Framer Motion",
  "Headless UI",
  "next-themes",
  "Swiper",
];

export default function AboutPage() {
  return (
    <>
      <Header />

      <main className="mx-auto max-w-4xl px-4 sm:px-6 mt-6 mb-16">
        <div className="space-y-8">
          <header>
            <h1 className="text-secondary-700 text-3xl font-bold mb-5">
              درباره این پروژه
            </h1>
            <p className="text-secondary-600 leading-[1.8] mb-10">
              این وب‌سایت یک اپلیکیشن مدیریت محتوای بلاگی مبتنی بر{" "}
              <strong>Next.js</strong> است که با هدف پیاده‌سازی سناریوهای واقعی
              توسعه وب ساخته شده است. این پروژه به‌عنوان یک نمونه‌کار،
              قابلیت‌های اصلی یک بلاگ واقعی را پیاده‌سازی کرده و تجربه‌ای مشابه
              با محصول واقعی ارائه می‌دهد.
            </p>
          </header>
          <section>
            <h2 className="text-secondary-700 text-2xl font-semibold mb-5">
              قابلیت‌های پیاده‌سازی‌شده
            </h2>

            <div className="space-y-5">
              {features.map((feature) => (
                <div key={feature.title}>
                  <h3 className="text-secondary-700 font-semibold mb-2">
                    {feature.title}
                  </h3>

                  <p className="text-secondary-600 leading-[1.9]">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
          <section>
            <h2 className="text-secondary-700 text-2xl font-semibold mb-5">
              هدف پروژه
            </h2>
            <p className="text-secondary-600 leading-[1.8] mb-10">
              تمرکز اصلی این پروژه، پیاده‌سازی مفاهیمی مانند مدیریت محتوا، تعامل
              کاربران و تجربه کاربری در قالب یک سیستم قابل توسعه بوده است.
              تصمیم‌های فنی با نگاه محصول‌محور و با در نظر گرفتن گسترش‌ پذیری در
              آینده گرفته شده‌اند.
            </p>
          </section>
          <section>
            <h2 className="text-secondary-700 text-2xl font-semibold mb-5">
              تکنولوژی‌های استفاده‌شده
            </h2>

            <div className="flex flex-wrap gap-2">
              {technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-lg bg-secondary-100 text-secondary-700 px-3 py-2 text-sm"
                >
                  {technology}
                </span>
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}
