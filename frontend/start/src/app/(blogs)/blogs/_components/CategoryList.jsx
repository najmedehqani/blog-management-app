"use client";
import { useSearchParams, useRouter } from "next/navigation";
import { useCategories } from "@/hooks/useCategories";
import CheckboxInput from "@/ui/CheckboxInput";
import { Squares2X2Icon } from "@heroicons/react/24/outline";
import Accordion from "@/ui/Accordion";
import { useId } from "react";

export default function CategoryList() {
  const { transformedCategories } = useCategories();
  const router = useRouter();
  const searchParams = useSearchParams();
  const uid = useId();

  const params = new URLSearchParams(searchParams.toString());
  const currentChecked = params.getAll("categorySlug");

  const handleChange = (value) => {
    if (currentChecked.includes(value)) {
      const updated = currentChecked.filter((item) => item !== value);
      params.delete("categorySlug");
      updated.forEach((v) => params.append("categorySlug", v));
    } else {
      params.append("categorySlug", value);
    }
    params.set("page", "1");
    router.replace(`?${params.toString()}`, { scroll: false });
  };

  return (
    <Accordion
      wrapperClass="w-full bg-secondary-0 p-1 mb-5 rounded-2xl"
      buttonClass="group flex items-center justify-between w-full px-4 "
      title={
        <span className="text-secondary-700 flex items-center gap-x-3 py-4">
          <Squares2X2Icon className="w-5 h-5" aria-hidden="true"/>
          <span className="font-bold ">دسته بندی ها</span>
        </span>
      }
      iconClass="text-secondary-700 w-5 h-5"
      pannelClass="px-4 pt-2 pb-4"
      showDivider
    >
      <div className="flex flex-col gap-y-3">
        {transformedCategories.map(({ value, label }) => (
          <CheckboxInput
            key={value}
            checked={currentChecked.includes(value)}
            value={value}
            onChange={() => handleChange(value)}
            label={label}
            id={`${uid}-${value}`}
          />
        ))}
      </div>
    </Accordion>
  );
}
