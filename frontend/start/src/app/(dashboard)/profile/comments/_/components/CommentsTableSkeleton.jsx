import TableSkeleton from "@/ui/TableSkeleton";

// Mirrors CommentsTable columns; "وضعیت" is a status badge (pill), last column
// is the actions.
const HEADERS = ["#", "متن", "نویسنده", "تاریخ ایجاد", "وضعیت", "عملیات"];
const CELLS = [
  "h-4 w-5",
  "h-4 w-56",
  "h-4 w-24",
  "h-4 w-16",
  "h-5 w-20 rounded-full",
  "h-7 w-16",
];

export default function CommentsTableSkeleton({ rows = 5 }) {
  return <TableSkeleton headers={HEADERS} cells={CELLS} rows={rows} />;
}
