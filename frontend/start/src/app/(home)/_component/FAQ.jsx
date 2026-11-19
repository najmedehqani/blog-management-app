import Accordion from "@/ui/Accordion";
const faqItems = [
  {
    question: "آیا برای استفاده از امکانات سایت باید ثبت‌نام کنم؟",
    answer:
      "بله، برای ایجاد پست، ثبت نظر، لایک و بوکمارک کردن مطالب نیاز به ثبت‌نام و ورود به حساب کاربری دارید.",
  },
  {
    question: "چگونه می‌توانم پست جدید ایجاد یا پست‌های قبلی را ویرایش کنم؟",
    answer:
      "پس از ورود به حساب کاربری، از طریق داشبورد می‌توانید پست جدید بسازید یا پست‌های قبلی خود را ویرایش و حذف کنید.",
  },
  {
    question: "دسته‌بندی‌ها چه کاربردی دارند و آیا قابل مدیریت هستند؟",
    answer:
      "دسته‌بندی‌ها برای نظم‌دهی به محتوا استفاده می‌شوند و امکان ایجاد، ویرایش و حذف آن‌ها وجود دارد.",
  },
  {
    question: "آیا می‌توانم پست‌ها را لایک یا ذخیره (بوکمارک) کنم؟",
    answer:
      "بله، کاربران واردشده به سایت می‌توانند پست‌ها را لایک کرده یا برای مطالعه بعدی بوکمارک کنند.",
  },
  {
    question: "آیا امکان ویرایش یا حذف اطلاعات و محتوای شخصی وجود دارد؟",
    answer:
      "بله، هر کاربر می‌تواند پست‌ها و اطلاعات پروفایل خود را در هر زمان ویرایش یا حذف کند.",
  },
];

function FAQ() {
  return (
    <div className="flex flex-col lg:flex-row lg:gap-12 gap-9 mb-20 md:mb-28">
      <div className="text-center lg:text-right lg:flex-1">
        <h2 className="text-2xl md:text-3xl font-black text-secondary-700 mb-4 md:mb-5">
          سوالات متداول
        </h2>
        <p className="text-secondary-500 leading-8 text-base lg:text-lg">
          اگر هنگام استفاده از وبلاگ برایتان سؤالی پیش آمده، احتمالاً پاسخ آن را
          اینجا پیدا می‌کنید. سعی کرده‌ایم به ساده‌ترین شکل به پرسش‌های پرتکرار
          کاربران پاسخ دهیم.
        </p>
      </div>
      <div className="lg:flex-[1.5] xl:flex-1">
        {faqItems.map((item, index) => (
          <Accordion
            key={item.question}
            wrapperClass="w-full bg-secondary-0 p-5 mb-5 last:mb-0 rounded-2xl"
            buttonClass="group flex items-center justify-between w-full gap-[6px]"
            title={
              <div className="text-secondary-700 text-base font-semibold mb-1">
                {item.question}
              </div>
            }
            iconClass="text-secondary-700 w-4 h-4 sm:w-5 sm:h-5 shrink-0"
            pannelClass=" pt-2 "
            showDivider
          >
            <div className="text-sm md:text-[15px] text-secondary-500 leading-relaxed">{item.answer}</div>
          </Accordion>
        ))}
      </div>
    </div>
  );
}

export default FAQ;
