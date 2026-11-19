"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import clsx from "clsx";
const SIZES = {
  sm: { className: "w-8 h-8 text-sm", px: 32 },
  md: { className: "w-9 h-9 text-base", px: 36 },
  lg: { className: "w-12 h-12 text-lg", px: 48 },
};
function Avatar({ src, size = "sm", name, isLoading = false }) {
  const [hasError, setHasError] = useState(false);
  const currentSize = SIZES[size] ?? SIZES.sm;

  useEffect(() => {
    setHasError(false);
  }, [src]);

  if (isLoading) {
    return (
      <div
        role="status"
        aria-label="در حال بارگذاری آواتار"
        className={clsx(
          "aspect-square rounded-full bg-secondary-200 animate-pulse",
          currentSize.className,
        )}
      />
    );
  }
  const cleanedName = name?.trim();
  if (!src || hasError) {
    return (
      <div
        role="img"
        aria-label={cleanedName ? `آواتار ${cleanedName}` : "آواتار"}
        className={clsx(
          "rounded-full border-2 border-secondary-0 aspect-square",
          "shadow-[0px_1.3px_6px_0px_rgba(0,0,0,0.25)]",
          "dark:shadow-[0_0_0_1px_rgba(255,255,255,0.1),_0_1.3px_6px_rgba(0,0,0,0.3)]",
          "text-secondary-0 dark:text-secondary-700 bg-secondary-300",
          "flex items-center justify-center",
          currentSize.className,
        )}
        title={cleanedName}
      >
        {cleanedName?.[0] ?? "?"}
      </div>
    );
  }
  return (
    <Image
      src={src}
      width={currentSize.px}
      height={currentSize.px}
      className={clsx(
        "rounded-full ring-1 ring-secondary-300 object-cover object-center aspect-square",
        currentSize.className,
      )}
      alt={cleanedName ? `آواتار ${cleanedName}` : "آواتار"}
      onError={() => setHasError(true)}
    />
  );
}

export default Avatar;
