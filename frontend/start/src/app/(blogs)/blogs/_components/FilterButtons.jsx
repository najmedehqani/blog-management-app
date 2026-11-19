"use client";
import BottomSheet from "@/ui/BottomSheet";
import Button from "@/ui/Button";
import { ArrowsUpDownIcon, Squares2X2Icon } from "@heroicons/react/24/outline";
import { useState } from "react";
import CategoryList from "./CategoryList";
import FiltersList from "./FiltersList";
import { Suspense } from "react";

function FilterButtons() {
  const [isOpenCategory, setIsOpenCategory] = useState(false);
  const [isOpenFilters, setIsOpenFilters] = useState(false);
  return (
    <div className="flex gap-x-4 lg:hidden">
      <Button
        variant="outline"
        className="flex-1 flex items-center gap-x-2 justify-center rounded-2xl "
        onClick={() => setIsOpenCategory(!isOpenCategory)}
      >
        <span className="font-bold">دسته بندی </span>
        <Squares2X2Icon className="w-5 h-5" />
      </Button>
      <Button
        variant="outline"
        className="flex-1 flex items-center gap-x-2 justify-center  rounded-2xl "
        onClick={() => setIsOpenFilters(!isOpenFilters)}
      >
        <span className="font-bold">مرتب سازی</span>
        <ArrowsUpDownIcon className="w-5 h-5" />
      </Button>
      <BottomSheet
        open={isOpenCategory}
        onClose={() => setIsOpenCategory(false)}
        title="دسته بندی ها"
      >
        <Suspense fallback={null}>
          <CategoryList />
        </Suspense>
      </BottomSheet>
      <BottomSheet
        open={isOpenFilters}
        onClose={() => setIsOpenFilters(false)}
        title="مرتب سازی"
      >
        <Suspense fallback={null}>
          <FiltersList />
        </Suspense>
      </BottomSheet>
    </div>
  );
}

export default FilterButtons;
