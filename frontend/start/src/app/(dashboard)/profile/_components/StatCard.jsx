import { toPersianDigits } from "@/utils/numberFormatter";
import {
  UserGroupIcon,
  ChatBubbleBottomCenterTextIcon,
  DocumentIcon,
} from "@heroicons/react/24/outline";

const iconMap = {
  comments: ChatBubbleBottomCenterTextIcon,
  users: UserGroupIcon,
  posts: DocumentIcon,
};

export default function StatCard({ title, value, type }) {
  const Icon = iconMap[type];

  return (
    <div
      className="rounded-xl bg-secondary-50 p-2 shadow-sm hover:shadow-[0_6px_19px_rgba(0,0,0,0.1)]
     transition-shadow duration-200 ease-out"
    >
      <div className="flex p-4 text-secondary-600 justify-center items-center gap-x-2">
        {Icon ? <Icon className="h-5 w-5" /> : null}
        <h3 className="text-sm font-medium">{title}</h3>
      </div>
      <p
        className="rounded-xl bg-secondary-0 px-4 py-8 text-center text-2xl text-secondary-500"
      >
        {toPersianDigits(value)}
      </p>
    </div>
  );
}
