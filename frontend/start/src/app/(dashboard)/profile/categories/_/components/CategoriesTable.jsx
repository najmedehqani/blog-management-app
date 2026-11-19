import { getCategoriesApi } from "@/services/categoryServie";
import CategoryRow from "./CategoryRow";
import Table from "@/ui/Table";
import EmptyState from "@/ui/EmptyState";

async function CategoriesTable() {
  const { categories } = await getCategoriesApi();
  if (!categories.length) return <EmptyState description="هنوز دسته‌بندی‌ای ثبت نشده است."/>
  return (
    <Table>
      <Table.Header>
        <th>#</th>
        <th>عنوان</th>
        <th>عنوان انگلیسی</th>
        <th>توضیحات</th>
        <th>عملیات</th>
      </Table.Header>
      <Table.Body>
        {categories.map((category, index) => (
          <CategoryRow key={category._id} category={category} index={index} />
        ))}
      </Table.Body>
    </Table>
  );
}

export default CategoriesTable;
