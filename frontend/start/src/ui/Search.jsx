"use client";

import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import ButtonIcon from "./ButtonIcon";
import { useState } from "react";

export default function Search({ className, pathname: customPathname }) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const currentPath = customPathname || pathname;

  const urlSearchValue = searchParams.get("search") || "";
  const [value, setValue] = useState(urlSearchValue);
  const [prevSearchValue, setPrevSearchValue] = useState(urlSearchValue);
  if (urlSearchValue !== prevSearchValue) {
    setPrevSearchValue(urlSearchValue);
    setValue(urlSearchValue);
  }

  const formSubmit = (e) => {
    e.preventDefault();
    const searchValue = value.trim();
    const newParams = new URLSearchParams(searchParams.toString());
    newParams.set("page", "1");
    if (searchValue) {
      newParams.set("search", searchValue);
    } else {
      newParams.delete("search");
    }

    router.push(currentPath + "?" + newParams.toString(), { scroll: false });
  };
  const clearInput = () => {
    setValue("");
    const newParams = new URLSearchParams(searchParams.toString());
    newParams.delete("search");
    newParams.set("page", "1");
    router.push(currentPath + "?" + newParams.toString(), { scroll: false });
  };

  return (
    <form
      role="search"
      className={`relative transition-all duration-300 ease-out  ${className}`}
      onSubmit={formSubmit}
    >
      <input
        aria-label="جستجوی عنوان یا کلمه کلیدی"
        type="text"
        name="search"
        placeholder="عنوان یا کلمه‌کلیدی..."
        autoComplete="off"
        className="textField__input py-4 text-xs bg-secondary-0 pr-10 pl-12 rounded-3xl border-secondary-200 "
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button
        aria-label="جستجو"
        type="submit"
        className="absolute left-2 top-1/2 ml-[1px] -translate-y-1/2 flex items-center bg-primary-900 hover:bg-primary-700 transition-all duration-300 w-10 h-10 rounded-full justify-center"
      >
        <MagnifyingGlassIcon className="h-5 text-secondary-0" aria-hidden="true"/>
      </button>
      {value && (
        <ButtonIcon
          aria-label="پاک کردن جستجو"
          variant="outline"
          onClick={clearInput}
          className="
            absolute right-3 top-1/2 -translate-y-1/2 border-none"
        >
          <XMarkIcon className="h-4" aria-hidden="true" />
        </ButtonIcon>
      )}
    </form>
  );
}
