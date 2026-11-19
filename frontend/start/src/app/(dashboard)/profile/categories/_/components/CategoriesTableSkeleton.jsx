import TableSkeleton from "@/ui/TableSkeleton";

// Mirrors CategoriesTable columns; last column is the edit/delete actions.
const HEADERS = ["#", "عنوان", "عنوان انگلیسی", "توضیحات", "عملیات"];
const CELLS = ["h-4 w-5", "h-4 w-24", "h-4 w-24", "h-4 w-40", "h-7 w-16"];

export default function CategoriesTableSkeleton({ rows = 5 }) {
  return <TableSkeleton headers={HEADERS} cells={CELLS} rows={rows} />;
}
