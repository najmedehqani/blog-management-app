import Skeleton from "@/ui/Skeleton";

// Loading placeholder for a PostCard — mirrors the cover / title / excerpt /
// meta geometry so the grid doesn't shift when posts arrive.
export default function PostCardSkeleton() {
  return (
    <div
      className="col-span-1 sm:col-span-6 xl:col-span-4 border border-secondary-300 rounded-2xl
      overflow-hidden bg-secondary-0 shadow-[0_2px_12px_rgba(0,0,0,0.06)] dark:shadow-[0_2px_12px_rgba(0,0,0,0.2)]"
    >
      <Skeleton className="aspect-video w-full mb-1 rounded-none" />

      <div className="p-4">
        <div className="mb-4 space-y-2">
          <Skeleton className="h-5 w-full" />
        </div>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-x-1">
            <Skeleton className="w-8 h-8 rounded-full" />
            <Skeleton className="h-4 w-20" />
          </div>
          <Skeleton className="h-3 w-24" />
        </div>

        <div className="flex items-center gap-x-4 border-t border-secondary-100 pt-3">
          <Skeleton className="h-6 w-9" />
          <Skeleton className="h-6 w-9" />
          <Skeleton className="h-6 w-6" />
        </div>
      </div>
    </div>
  );
}
