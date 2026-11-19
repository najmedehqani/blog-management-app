"use client";

import Accordion from "@/ui/Accordion";
import Dropdown from "@/ui/Dropdown";
import {
  DocumentTextIcon,
  HomeIcon,
  InformationCircleIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SiInstagram, SiTelegram } from "react-icons/si";
const links = [
  {
    id: 1,
    title: "خانه",
    icon: <HomeIcon className="w-5 h-5" />,
    href: "/",
  },

  {
    id: 2,
    title: "بلاگ ها",
    icon: <DocumentTextIcon className="w-5 h-5" />,
    href: "/blogs",
  },
];
const aboutClass =
  "flex items-center w-full gap-x-2 py-2 pr-4 pl-5 rounded-xl data-[focus]:bg-secondary-100";
const aboutItems = [
  {
    id: 1,
    type: "button",
    content: (
      <>
        <SiInstagram className="w-5 h-5" />
        <span>صفحه اینستاگرام</span>
      </>
    ),
    className: aboutClass,
  },
  {
    id: 2,
    type: "button",
    content: (
      <>
        <SiTelegram className="w-5 h-5" />
        <span>کانال تلگرام</span>
      </>
    ),
    className: aboutClass,
  },
  {
    id: 3,
    type: "link",
    href: "/about-us",
    content: (
      <>
        <InformationCircleIcon className="w-5 h-5" />
        <span>درباره ما</span>
      </>
    ),
    className: aboutClass,
  },
];

function HeaderNavLinks({ inline }) {
  const pathname = usePathname();
  return (
    <ul
      className="space-y-2 md:space-y-0 flex flex-col md:flex-row md:items-center justify-between gap-x-9
     text-secondary-500 font-medium  md:text-lg"
    >
      {links.map((nav) => {
        const isActive =
          nav.href === "/"
            ? pathname === nav.href
            : pathname.startsWith(nav.href);
        return (
          <li key={nav.id}>
            <Link
              href={nav.href}
              aria-current={isActive ? "page" : undefined}
              className={clsx(
                "transition-all duration-200 hover:text-primary-900 hover:bg-primary-100/40 md:hover:bg-transparent rounded-2xl block py-3 pr-4 pl-5 md:py-1 md:px-0",
                {
                  "bg-primary-100/40 md:bg-transparent font-bold text-primary-900":
                    isActive,
                },
              )}
            >
              <div className="flex items-center gap-x-2 ">
                {nav.icon}
                <span>{nav.title}</span>
              </div>
            </Link>
          </li>
        );
      })}
      <li>
        {inline ? (
          <Dropdown
            button={({ open }) => (
              <span className="flex items-center gap-x-2 py-1 hover:text-primary-900 w-full">
                <span>ارتباط با ما</span>
                <ChevronDownIcon
                  className={clsx(
                    "w-4 h-4 duration-300 ease-out transition-transform",
                    open && "rotate-180",
                  )}
                />
              </span>
            )}
            items={aboutItems}
            className="px-2 py-3 rounded-lg shadow-lg bg-secondary-0 mt-1 text-secondary-500"
          />
        ) : (
          <Accordion
            title="ارتباط با ما"
            buttonClass="flex items-center gap-x-2 py-3 pr-4 pl-5 hover:text-primary-900 w-full"
            iconClass="w-4 h-4"
          >
            {aboutItems.map((item) =>
              item.type === "link" ? (
                <Link
                  href={item.href}
                  key={item.id}
                  className="flex w-full items-center gap-x-2 py-2 pr-4 pl-5 text-secondary-500 hover:bg-secondary-100 rounded-xl"
                >
                  {item.content}
                </Link>
              ) : (
                <button
                  key={item.id}
                  type="button"
                  className="flex w-full items-center gap-x-2 py-2 pr-4 pl-5 text-secondary-500 hover:bg-secondary-100 rounded-xl"
                >
                  {item.content}
                </button>
              ),
            )}
          </Accordion>
        )}
      </li>
    </ul>
  );
}

export default HeaderNavLinks;
