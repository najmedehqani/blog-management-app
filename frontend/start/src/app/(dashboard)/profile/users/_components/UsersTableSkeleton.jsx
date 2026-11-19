import TableSkeleton from "@/ui/TableSkeleton";

// Mirrors UsersTable columns; "آواتار" is a round image and the last two
// columns are short bookmark/like counts.
const HEADERS = [
  "#",
  "آواتار",
  "نام",
  "ایمیل",
  "تاریخ عضویت",
  "آخرین آپدیت",
  "تعداد بوکمارک ها",
  "تعداد لایک ها",
];
const CELLS = [
  "h-4 w-5",
  "h-10 w-10 rounded-full",
  "h-4 w-24",
  "h-4 w-40",
  "h-4 w-16",
  "h-4 w-16",
  "h-4 w-8",
  "h-4 w-8",
];

export default function UsersTableSkeleton({ rows = 5 }) {
  return <TableSkeleton headers={HEADERS} cells={CELLS} rows={rows} />;
}
