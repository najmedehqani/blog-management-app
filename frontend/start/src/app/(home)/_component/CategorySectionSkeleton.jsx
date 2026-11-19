import Skeleton from "@/ui/Skeleton";

function CategorySectionSkeleton() {
  return (
    <section className="mb-20 md:mb-28">
      <div className="mb-8 flex flex-col justify-center items-center gap-y-1">
        <Skeleton className="h-9 w-48" />
        <Skeleton className="h-5 w-64 max-w-full" />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {Array.from({ length: 7 }).map((_, i) => (
          <div
            key={i}
            className="h-full flex flex-col items-center gap-y-3 rounded-2xl p-5
            border border-secondary-200/70 bg-secondary-0"
          >
            <Skeleton className="w-14 h-14 rounded-2xl" />
            <Skeleton className="h-5 md:h-6 w-20" />
            <Skeleton className="h-4 w-16" />
          </div>
        ))}
      </div>
    </section>
  );
}

export default CategorySectionSkeleton;