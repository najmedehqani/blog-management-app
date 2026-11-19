import Skeleton from "@/ui/Skeleton";

function TopAuthorsSkeleton() {
  return (
    <div className="grid gap-8 grid-cols-1 lg:grid-cols-5 items-center mb-20 md:mb-28 lg:mb-32">
      <div className="flex flex-col items-center lg:items-start lg:col-span-2">
        <Skeleton className="h-8 md:h-9 w-56 mb-4" />
        <div className="w-full max-w-lg flex flex-col items-center lg:items-start gap-y-2">
          <Skeleton className="h-5 w-full" />
          <Skeleton className="h-5 w-2/3" />
        </div>
      </div>

      <div className="lg:col-span-3">
        <div
          className="bg-secondary-100 p-6 flex flex-col justify-center items-center rounded-xl
          max-w-md aspect-video shadow-md dark:shadow-black/30 border border-secondary-100 mx-auto"
        >
          <Skeleton className="w-28 h-28 rounded-full mb-4 bg-secondary-300" />
          <Skeleton className="h-6 w-32 bg-secondary-300" />
          <Skeleton className="h-5 w-52 max-w-full mt-2 bg-secondary-300" />
        </div>

        <div className="mt-5 flex justify-center gap-x-2">
          <Skeleton className="w-2 h-2 rounded-full" />
          <Skeleton className="w-2 h-2 rounded-full" />
          <Skeleton className="w-2 h-2 rounded-full" />
        </div>
      </div>
    </div>
  );
}

export default TopAuthorsSkeleton;