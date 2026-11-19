import TableSkeleton from "@/ui/TableSkeleton";

// Column config mirrors PostTable (posts/-/components/PostTable.jsx): the last
// two columns are a type badge (pill) and the actions buttons.
const HEADERS = ["#", "عنوان", "دسته بندی", "نویسنده", "تاریخ ایجاد", "نوع", "عملیات"];
const CELLS = [
  "h-4 w-5",
  "h-4 w-32",
  "h-4 w-20",
  "h-4 w-24",
  "h-4 w-16",
  "h-5 w-14 rounded-full",
  "h-7 w-16",
];

export default function PostsTableSkeleton({ rows = 5 }) {
  return <TableSkeleton headers={HEADERS} cells={CELLS} rows={rows} />;
}
