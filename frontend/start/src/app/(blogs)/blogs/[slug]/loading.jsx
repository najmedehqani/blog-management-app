import Skeleton from "@/ui/Skeleton";

function Loading() {
  return (
    <div className="max-w-screen-md mx-auto mt-12">
      <Skeleton className="h-8 w-2/4 mb-8" />

      <div className="mb-4 space-y-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />
      </div>

      <div className="mb-8 space-y-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-2/3" />
      </div>

      <Skeleton className="aspect-video w-full rounded-lg mb-12" />

      <div className="mb-12">
        <Skeleton className="h-7 w-40 mb-4" />
        <div className="grid gap-5 grid-cols-6">
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="col-span-6 md:col-span-3 lg:col-span-2 border border-secondary-200 rounded-lg"
            >
              <div className="rounded-lg overflow-hidden mb-2">
                <Skeleton className="aspect-video w-full mb-1 rounded-none" />
              </div>
              <div className="p-2">
                <Skeleton className="h-5 w-4/5 mb-4" />
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-x-1">
                    <Skeleton className="w-7 h-7 rounded-full" />
                    <Skeleton className="h-4 w-16" />
                  </div>
                  <Skeleton className="h-5 w-14 rounded-full" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-20">
        <div className="flex flex-col items-center lg:flex-row justify-between gap-y-3 mb-8">
          <Skeleton className="h-8 w-24" />
          <Skeleton className="h-10 w-36 rounded-lg" />
        </div>

        <div className="space-y-8 bg-secondary-0 rounded-xl py-6 px-3 lg:px-6">
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="border border-secondary-200 rounded-xl p-2 sm:p-4"
            >
              <div className="flex items-center justify-between mb-5 border-b border-b-secondary-200/60 pb-2">
                <div className="flex items-center gap-x-2">
                  <Skeleton className="w-10 h-10 rounded-full" />
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-24" />
                    <Skeleton className="h-3 w-16" />
                  </div>
                </div>
                <Skeleton className="h-7 w-16 rounded-lg" />
              </div>
              <div className="space-y-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-2/3" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Loading;
