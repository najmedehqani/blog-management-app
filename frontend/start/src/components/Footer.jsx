import Link from "next/link";
import { SiInstagram, SiLinkedin, SiTelegram } from "react-icons/si";

function Footer() {
  return (
    <footer
      className="py-6 md:py-8 text-secondary-600 border-t-2 border-t-secondary-200 
bg-secondary-200 px-4 rounded-t-3xl dark:bg-secondary-0 dark:border-t-secondary-0 "
    >
      <div className="grid gap-8 md:gap-14 grid-cols-4 container md:max-w-screen-xl ">
        <div className="col-span-4 md:col-span-2 flex flex-col">
          <div>
            <h3 className="font-bold md:text-lg">اپلیکشن مدیریت بلاگ</h3>
            <p className="text-sm leading-7 max-w-lg">
              ساخت وبلاگ و وبلاگ نویسی، یکی از لذت بخش‌ترین نحوه‌های ارتباط با
              دیگران و اشتراک مطالب و روزنوشته‌های هر شخص می‌تواند باشد. فضای
              ساده و صمیمی ما، امکان اشتراک مطالب مورد علاقه، خاطرات، تجربیات و
              مطالب علمی را برای همگان فراهم آورده و می‌توانید علاوه بر لذت
              تعامل با دوستان و دنبال‌کنندگان، سطح مطالعه و اطلاعات خود و دیگران
              را افزایش دهید. امیدواریم این امکانات، بستر مناسبی برای شما وبلاگ
              نویسان عزیز فراهم بیاورد و از آن لذت ببرید.
              <br /> شما می توانید از طریق اینستاگرام، تلگرام و لینکدین با ما در
              ارتباط باشید.
            </p>
          </div>
          <div className="w-full flex gap-x-8 items-center mt-4">
            <a
              href="#"
              // target="_blank"
              // rel="noopener noreferrer"
              aria-label="اینستاگرام"
              className="hover:text-primary-900 transition-all ease-out duration-200"
            >
              <SiInstagram className="w-6 h-6 " />
            </a>
            <a
              href="#"
              // target="_blank"
              // rel="noopener noreferrer"
              aria-label="تلگرام"
              className="hover:text-primary-900 transition-all ease-out duration-200"
            >
              <SiTelegram className="w-6 h-6" />
            </a>
            <a
              href="#"
              // target="_blank"
              // rel="noopener noreferrer"
              aria-label="لینکدین"
              className="hover:text-primary-900 transition-all ease-out duration-200"
            >
              <SiLinkedin className="w-6 h-6" />
            </a>
          </div>
        </div>
        <div className="col-span-4 md:col-span-1">
          <h4 className="font-bold md:text-lg mb-3"> دسترسی سریع</h4>
          <ul className="text-sm space-y-3 list-disc pr-4">
            <li>
              <Link
                className="py-2 hover:text-primary-900 transition-all ease-out duration-200"
                href="/signin"
                prefetch={false}
              >
                ورود یا ثبت نام
              </Link>
            </li>
            <li>
              <Link
                className="py-2 hover:text-primary-900 transition-all ease-out duration-200"
                href="/blogs"
              >
                بلاگ ها
              </Link>
            </li>
            <li>
              <Link
                className="py-2 hover:text-primary-900 transition-all ease-out duration-200"
                href="/profile"
                prefetch={false}
              >
                مدیریت پست ها
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-span-4 md:col-span-1">
          <h4 className="font-bold md:text-lg mb-3"> آنچه باید بدانید</h4>
          <ul className="text-sm space-y-3 list-disc pr-4">
            <li>
              <Link
                className="py-2 hover:text-primary-900 transition-all ease-out duration-200"
                href="/about-us"
              >
                درباره ما
              </Link>
            </li>
            <li>
              <Link
                className="py-2 hover:text-primary-900 transition-all ease-out duration-200"
                href="#"
              >
                قوانین و مقررات
              </Link>
            </li>
            <li>
              <Link
                className="py-2 hover:text-primary-900 transition-all ease-out duration-200"
                href="#"
              >
                تماس با ما
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
