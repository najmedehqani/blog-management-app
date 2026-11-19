import { Suspense } from "react";
import { CreateCategory } from "./_/components/Buttons";
import CategoriesTable from "./_/components/CategoriesTable";
import CategoriesTableSkeleton from "./_/components/CategoriesTableSkeleton";
export const metadata = {
  title: "دسته بندی ها",
};
export const dynamic = "force-dynamic";
function CategoriesPage() {
  return (
    <div>
      <div className="grid grid-cols-2 justify-between items-center text-secondary-700 mb-12">
        <h1 className="font-bold text-xl">لیست دسته بندی ها</h1>
        <CreateCategory />
      </div>
      <Suspense fallback={<CategoriesTableSkeleton />}>
        <CategoriesTable />
      </Suspense>
    </div>
  );
}

export default CategoriesPage;
