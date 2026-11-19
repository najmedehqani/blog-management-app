"use client";

import { HomeIcon, PencilIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import ButtonIcon from "@/ui/ButtonIcon";
import UserInfo from "@/ui/UserInfo.jsx";
import StatusDot from "@/ui/StatusDot.jsx";
import { useAuth } from "@/context/AuthContext.jsx";
import { PiSignIn, PiX } from "react-icons/pi";
import UserInfoSkeleton from "@/ui/UserInfoSkeleton.jsx";
import clsx from "clsx";
export default function SideBar({ onClose, children }) {
  const { user, isLoading } = useAuth();

  return (
    <div className="flex flex-col p-5 h-screen pt-10 lg:pt-8">
      {/* Drawer header */}
      <div className=" border-b border-b-secondary-200 pb-2 mb-6 flex items-center justify-between w-full">
        <Link
          href="/"
          className="flex items-center gap-x-1 justify-center text-secondary-700 lg:flex-1"
        >
          <HomeIcon className="w-6 h-6" />
          <span>اپلیکشن مدیریت بلاگ</span>
        </Link>
        <ButtonIcon
          onClick={onClose}
          variant="outline"
          className="block lg:hidden border-none [&>svg]:w-5 [&>svg]:h-5"
          aria-label="بستن منو"
        >
          <PiX />
        </ButtonIcon>
      </div>
      {/* Drawer content */}
      <div className="overflow-y-auto flex-auto min-h-0">{children}</div>

      {isLoading ? (
        <UserInfoSkeleton />
      ) : user ? (
        <Link
          aria-label={`ویرایش پروفایل ${user?.name ?? ""}`}
          href="/profile/me"
          className="group flex items-center justify-between gap-x-1"
        >
          <div className="flex-1 relative min-w-0">
            <UserInfo user={user} isLoading={isLoading} />
            <StatusDot className="bottom-0 right-0" />
          </div>
          <span
            aria-hidden="true"
            className={clsx(
              "p-2 rounded-xl border border-secondary-200 text-secondary-600",
              "group-hover:bg-secondary-200 transition-colors duration-300 ease-out",
              "flex items-center justify-center",
            )}
          >
            <PencilIcon className="w-4 h-4" />
          </span>
        </Link>
      ) : (
        <Link
          href="/signin"
          className="btn btn--primary flex items-center gap-1 justify-center"
        >
          <PiSignIn className="w-6 h-6" />
          <span className="font-bold text-sm">ورود</span>
        </Link>
      )}
    </div>
  );
}
