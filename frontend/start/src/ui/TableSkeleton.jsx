import Skeleton from "./Skeleton";

// Loading placeholder for any <Table>. Renders the real, static column headers
// with skeleton bars in the body, matching the Table primitive's wrapper and
// `title-row` header so the layout doesn't shift when data arrives.
//
// - `headers`: the column labels (same order as the real table).
// - `cells`: full Skeleton classNames per column — shape encodes the column
//   (e.g. `rounded-full` for an avatar/badge, a short width for a count).
// - `rows`: how many placeholder rows to show.
export default function TableSkeleton({ headers, cells, rows = 5 }) {
  return (
    <div className="bg-secondary-0 overflow-x-auto" aria-hidden="true">
      <table>
        <thead>
          <tr className="title-row">
            {headers.map((header) => (
              <th key={header}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: rows }).map((_, row) => (
            <tr key={row}>
              {headers.map((_header, col) => (
                <td key={col}>
                  <Skeleton className={cells?.[col] ?? "h-4 w-20"} />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
