import Skeleton from "@/ui/Skeleton";

// Loading placeholder for <CardWrapper /> — same grid and card geometry so the
// real stats drop in without shifting the layout.
export default function StatCardsSkeleton() {
  return (
    <div className="grid gap-6 md:grid-cols-3 mb-8" aria-hidden="true">
      {[0, 1, 2].map((i) => (
        <div key={i} className="rounded-xl bg-secondary-50 p-2 shadow-sm">
          <div className="flex items-center justify-center gap-x-2 p-4">
            <Skeleton className="h-5 w-5 rounded-full" />
            <Skeleton className="h-4 w-20" />
          </div>
          <Skeleton className="h-24 w-full rounded-xl" />
        </div>
      ))}
    </div>
  );
}
