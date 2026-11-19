import CategoryList from "../_components/CategoryList";
import Search from "@/ui/Search";
import FiltersList from "../_components/FiltersList";
import FilterButtons from "../_components/FilterButtons";
import { Suspense } from "react";

export const metadata = {
  title: "بلاگ ها ",
};

function Layout({ children }) {
  return (
    <div className="mt-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-secondary-700 mb-12 items-center">
        <h1 className="text-lg font-bold">لیست بلاگ ها</h1>
        <div className="lg:col-span-2 lg:justify-self-center">
          <Suspense
            fallback={
              <div className="search h-[58px] rounded-3xl bg-secondary-100 animate-pulse" />
            }
          >
            <Search className="lg:w-[460px] lg:focus-within:w-[480px]" />
          </Suspense>
        </div>
        <FilterButtons />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="hidden lg:block lg:col-span-4 xl:col-span-3">
          <Suspense fallback={null}>
            <CategoryList />
          </Suspense>
          <Suspense fallback={null}>
            <FiltersList />
          </Suspense>
        </div>
        <div className="col-span-1 lg:col-span-8 xl:col-span-9">{children}</div>
      </div>
    </div>
  );
}

export default Layout;
