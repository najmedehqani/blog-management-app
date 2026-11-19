"use client";
import Accordion from "@/ui/Accordion";
import RadioButtonInput from "@/ui/RadioButtonInput";
import { ArrowsUpDownIcon } from "@heroicons/react/24/outline";
import { useSearchParams, useRouter } from "next/navigation";
import { useId } from "react";
const sorts = [
  {
    label: "تاریخ ایجاد(جدیدترین)",
    value: "latest",
  },
  {
    label: "تاریخ ایجاد(قدیمی ترین)",
    value: "earliest",
  },
  {
    label: "محبوبیت",
    value: "popular",
  },
  {
    label: "زمان مطالعه(نزولی)",
    value: "time_desc",
  },
  {
    label: "زمان مطالعه(صعودی)",
    value: "time_asc",
  },
];
function FiltersList() {
  const router = useRouter();
  const searchParams = useSearchParams();
   const uid = useId();
  
  const params = new URLSearchParams(searchParams.toString());
  const currentChecked = params.get("sort");

  const handleChange = (value) => {
    params.set("sort", value);

    router.replace(`?${params.toString()}`);
  };
  return (
    <Accordion
      wrapperClass="w-full bg-secondary-0 p-1 mb-5 rounded-2xl"
      buttonClass="group flex items-center justify-between w-full px-4 "
      title={
        <span className="text-secondary-700 flex items-center gap-x-3 py-4">
          <ArrowsUpDownIcon className="w-5 h-5" aria-hidden="true"/>
          <span className="font-bold ">مرتب سازی</span>
        </span>
      }
      iconClass="text-secondary-700 w-5 h-5"
      pannelClass="px-4 pt-2 pb-4"
      showDivider
    >
      <div className="flex flex-col gap-y-3">
        {sorts.map(({ value, label }) => (
          <RadioButtonInput
            key={value}
            checked={currentChecked === value}
            value={value}
            onChange={() => handleChange(value)}
            label={label}
            id={`${uid}-${value}`}
            name="sort"
          />
        ))}
      </div>
    </Accordion>
  );
}

export default FiltersList;
