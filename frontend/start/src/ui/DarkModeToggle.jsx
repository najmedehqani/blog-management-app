"use client";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function DarkModeToggle() {
  const {setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const isDarkMode = resolvedTheme === "dark";
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  return (
    <button onClick={() => setTheme(isDarkMode ? "light" : "dark")}>
      {isDarkMode ? (
        <SunIcon
          className={"w-6 h-6 text-primary-900"}
        />
      ) : (
        <MoonIcon
          className={"w-6 h-6 text-primary-900"}
        />
      )}
    </button>
  );
}
