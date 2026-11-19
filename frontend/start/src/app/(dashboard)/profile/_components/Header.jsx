"use client";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import Avatar from "@/ui/Avatar";
import { useEffect, useState } from "react";
import ButtonIcon from "@/ui/ButtonIcon";
import { PiList, PiX } from "react-icons/pi";
import Drawer from "@/ui/Drawer";
import SideBar from "@/ui/SideBar";
import PannelNavLinks from "./PannelNavLinks";
import DarkModeToggle from "@/ui/DarkModeToggle";
import Skeleton from "@/ui/Skeleton";
import { usePathname } from "next/navigation";

function Header() {
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);
  const [greeting, setGreeting] = useState(null);
  const { user, isLoading } = useAuth();
  const pathname = usePathname();

  useEffect(() => {
    setIsOpenDrawer(false);
  }, [pathname]);

  useEffect(() => {
    const hour = new Date().getHours();
    setGreeting(
      hour >= 5 && hour < 12
        ? "صبح بخیر ☀️"
        : hour >= 12 && hour < 18
          ? "عصر بخیر 🌤️"
          : "شب بخیر 🌙",
    );
  }, []);

  return (
    <header className="bg-secondary-0 sticky top-0">
      <div className="flex items-center justify-between py-5 px-4 lg:px-8 xl:max-w-screen-xl">
        <ButtonIcon
          className="block lg:hidden border-none text-secondary-700 [&>svg]:w-7 [&>svg]:h-7 !rounded-full p-2"
          onClick={() => setIsOpenDrawer(!isOpenDrawer)}
          variant="outline"
          aria-label={isOpenDrawer ? "بستن منو" : "باز کردن منو"}
        >
          {isOpenDrawer ? <PiX /> : <PiList />}
        </ButtonIcon>
        <div className="flex flex-col lg:flex-row justify-start items-start lg:items-center gap-x-2 gap-y-0.5">
          {isLoading ? (
            <Skeleton className="h-4 w-24" />
          ) : (
            <span className="text-sm lg:text-lg font-bold text-secondary-700 truncate max-w-[190px] md:max-w-none">
              سلام؛ {user?.name || "کاربر"}
            </span>
          )}

          <span className="hidden lg:block h-4 w-0.5 bg-secondary-300"></span>
          {greeting ? (
            <span className="text-sm text-secondary-500 font-bold">
              {greeting}
            </span>
          ) : (
            <Skeleton className="h-4 w-20" />
          )}
        </div>
        <div className="flex items-center gap-x-3">
          <DarkModeToggle />
          <Link href="/profile" className="block lg:hidden">
            <Avatar
              isLoading={isLoading}
              src={user?.avatarUrl}
              name={user?.name}
            />
          </Link>
        </div>
        <Drawer
          open={isOpenDrawer}
          onClose={() => setIsOpenDrawer(false)}
          ariaLabel="منوی ناوبری"
        >
          <SideBar onClose={() => setIsOpenDrawer(false)}>
            <PannelNavLinks />
          </SideBar>
        </Drawer>
      </div>
    </header>
  );
}
export default Header;
