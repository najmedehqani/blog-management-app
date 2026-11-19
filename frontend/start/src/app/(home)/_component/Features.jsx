import {
  DocumentTextIcon,
  Squares2X2Icon,
  UserCircleIcon,
  ChatBubbleLeftRightIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    id: 1,
    icon: <DocumentTextIcon className="w-10 h-10 text-primary-700" />,
    title: "هر وقت ایده‌ای رسید، بنویس",
    desc: "وقتی یه ایده به ذهنت رسید، همون لحظه شروع کن. بعداً برگرد و ویرایشش کن، وقتی آماده شد منتشرش کن.",
    bgIcon: "bg-primary-100",
  },
  {
    id: 2,
    icon: <Squares2X2Icon className="w-10 h-10 text-[#E5943C] dark:text-[#FFEECA]" />,
    title: "نوشته‌ها رو به سبک خودت بچین",
    desc: "دسته‌بندی و برچسب‌ها کمک می‌کنن نوشته‌هات راحت پیدا شن، درست همون‌طوری که خودت دوست داری.",
    bgIcon: "bg-[#FFEECA] dark:bg-[#E5943C]",
  },
  {
    id: 3,
    icon: <ChatBubbleLeftRightIcon className="w-10 h-10 text-[#4E9F6E] dark:text-[#D8F3DC]" />,
    title: "نوشته‌ها برای خوانده شدن ساخته شدن",
    desc: "بخون، لایک کن، نظر بده و وارد گفتگو شو. بلاگ وقتی زنده‌ست که آدم‌ها با هم حرف می‌زنن.",
    bgIcon: "bg-[#D8F3DC] dark:bg-[#4E9F6E]",
  },
  {
    id: 4,
    icon: <UserCircleIcon className="w-10 h-10 text-[#7D3C98] dark:text-[#E1C7EC]" />,
    title: "بلاگت کم‌کم شبیه تو می‌شه",
    desc: "هر نوشته و هر بازخورد یه تکه از شخصیت بلاگت رو می‌سازه و تو پروفایلت دیده می‌شه.",
    bgIcon: "bg-[#E1C7EC] dark:bg-[#7D3C98]",
  },
];

function Features() {
  return (
    <div className="mb-20 md:mb-28 lg:mb-32">
      <h2 className="font-black text-2xl md:text-3xl text-secondary-700 mb-10">
        هر چیزی که برای نوشتن لازم داری
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
        {features.map((item) => (
          <div
            key={item.id}
            className={` group flex flex-col gap-3 p-7 rounded-2xl border border-secondary-100 shadow-sm 
              bg-secondary-0 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-md
              dark:shadow-sm dark:shadow-black/20 dark:hover:shadow-md dark:hover:shadow-black/30 `}
          >
            <div
              className={`shrink-0 flex items-center justify-center w-14 h-14 transition-transform 
                duration-300 group-hover:scale-110 rounded-2xl ${item.bgIcon}`}
            >
              {item.icon}
            </div>
            <div>
              <h3 className="font-semibold text-lg md:text-xl mb-2 text-secondary-700 ">
                {item.title}
              </h3>
              <p className="text-secondary-500 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Features;
