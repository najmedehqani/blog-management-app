"use client";

import { useAuth } from "@/context/AuthContext";
import Dropdown from "@/ui/Dropdown";
import UserInfo from "@/ui/UserInfo";
import { PiSignIn, PiSignOut, PiList, PiX } from "react-icons/pi";
import HeaderNavLinks from "./HeaderNavLinks";
import ButtonIcon from "@/ui/ButtonIcon";
import { useEffect, useState } from "react";
import Drawer from "@/ui/Drawer";
import SideBar from "@/ui/SideBar";
import DarkModeToggle from "@/ui/DarkModeToggle";
import Link from "next/link";
import { ChevronDownIcon, UserIcon } from "@heroicons/react/24/outline";
import { usePathname } from "next/navigation";

function Header() {
  const { user, isLoading, logout } = useAuth();
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsOpenDrawer(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const userDropdownItems = [
    {
      id: 1,
      type: "label",
      content: (
        <div className="py-1 px-2">
          <UserInfo user={user} isLoading={isLoading} />
        </div>
      ),
    },
    { id: 2, type: "divider" },
    {
      id: 3,
      type: "link",
      href: "/profile",
      prefetch: false,
      content: (
        <>
          <UserIcon className="w-5 h-5" />
          <span>حساب کاربری</span>
        </>
      ),
      className:
        "clickable-item font-normal w-full data-[focus]:bg-primary-100/40 data-[focus]:text-primary-900 ",
    },
    {
      id: 4,
      type: "button",
      onClick: logout,
      content: (
        <>
          <PiSignOut className="w-5 h-5 " />
          <span>خروج</span>
        </>
      ),
      className:
        "data-[focus]:text-red-400 w-full data-[focus]:bg-red-100/40 clickable-item font-normal",
    },
  ];
  return (
    <header
      className={`z-10 sticky top-0 transition-all duration-300
         ${
           isScrolled
             ? "backdrop-blur-xl bg-secondary-0/75 border-b border-secondary-100 shadow-sm shadow-black/5"
             : "bg-transparent border-b border-transparent"
         }
         ${isLoading ? "opacity-70" : "opacity-100"}`}
    >
      <div className="container xl:max-w-screen-xl top-0 py-3">
        <nav className="flex items-center justify-between">
          <ButtonIcon
            onClick={() => setIsOpenDrawer(!isOpenDrawer)}
            className=" md:hidden border-none text-secondary-700 [&>svg]:w-8 [&>svg]:h-8 rounded-full p-2"
            variant="outline"
            aria-label={isOpenDrawer ? "بستن منو" : "باز کردن منو"}
          >
            {isOpenDrawer ? <PiX /> : <PiList />}
          </ButtonIcon>
          <div className="hidden md:block">
            <HeaderNavLinks inline={true} />
          </div>
          <div className="flex items-center gap-x-3">
            <DarkModeToggle />
            {user ? (
              <Dropdown
                button={
                  <span
                    className="flex border border-secondary-200 text-secondary-600 hover:bg-secondary-100
                 items-center rounded-2xl py-2 px-1"
                  >
                    <UserIcon className="w-5 h-5" />
                    <ChevronDownIcon className="w-3 h-3" />
                  </span>
                }
                items={userDropdownItems}
                className="px-2 py-3 shadow-lg rounded-lg bg-secondary-0 w-52 mt-1"
                buttonLabel="منوی کاربر"
              />
            ) : (
              <Link
                prefetch={false}
                href="/signin"
                className={`btn btn--primary flex items-center gap-1 justify-center rounded-3xl 
                px-4 py-2 ${isLoading ? "pointer-events-none opacity-80" : ""}`}
              >
                <PiSignIn className="w-6 h-6 " />
                <p className="font-bold text-sm">ورود</p>
              </Link>
            )}
          </div>
        </nav>
        <Drawer
          open={isOpenDrawer}
          onClose={() => setIsOpenDrawer(false)}
          ariaLabel="منوی ناوبری"
        >
          <SideBar onClose={() => setIsOpenDrawer(false)}>
            <HeaderNavLinks inline={false} />
          </SideBar>
        </Drawer>
      </div>
    </header>
  );
}
export default Header;
