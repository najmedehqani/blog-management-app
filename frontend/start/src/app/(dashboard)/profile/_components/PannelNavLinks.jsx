"use client";
import { useAuth } from "@/context/AuthContext";
import {
  ArrowLeftStartOnRectangleIcon,
  ChatBubbleBottomCenterIcon,
  DocumentTextIcon,
  RectangleGroupIcon,
  Squares2X2Icon,
  UsersIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
const pannelNavLinks = [
  {
    id: 1,
    title: "داشبورد",
    icon: <RectangleGroupIcon className="w-5 h-5" />,
    href: "/profile",
  },

  {
    id: 2,
    title: "پست ها",
    icon: <DocumentTextIcon className="w-5 h-5" />,
    href: "/profile/posts",
  },
  {
    id: 3,
    title: "نظرات",
    icon: <ChatBubbleBottomCenterIcon className="w-5 h-5" />,
    href: "/profile/comments",
  },
  {
    id: 4,
    title: "دسته بندی ها",
    icon: <Squares2X2Icon className="w-5 h-5" />,
    href: "/profile/categories",
  },
  {
    id: 5,
    title: "کاربران",
    icon: <UsersIcon className="w-5 h-5" />,
    href: "/profile/users",
  },
];

export default function PannelNavLinks() {
  const pathname = usePathname();
  const { logout } = useAuth();
  const logoutHandler = async () => {
    await logout();
  };
  return (
    <ul className="space-y-2">
      {pannelNavLinks.map((nav) => {
        return (
          <li key={nav.id}>
            <Link
             aria-current={pathname === nav.href ? "page" : undefined}
              href={nav.href}
              className={clsx("clickable-item", {
                "bg-primary-100/40 !font-bold !text-primary-900":
                  pathname === nav.href,
              })}
            >
              {nav.icon}
              {nav.title}
            </Link>
          </li>
        );
      })}
      <li>
        <button
          onClick={logoutHandler}
          className="clickable-item hover:bg-red-100/40 hover:text-red-400 cursor-pointer w-full"
        >
          <ArrowLeftStartOnRectangleIcon className="ml-4 h-5 w-5" />
          <span>خروج</span>
        </button>
      </li>
    </ul>
  );
}
