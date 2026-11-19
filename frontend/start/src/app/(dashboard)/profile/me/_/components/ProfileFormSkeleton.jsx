import Skeleton from "@/ui/Skeleton";

// Loading placeholder for UpdateProfileForm — same banner / avatar / fields
// structure so the account form settles into place without a jump.
export default function ProfileFormSkeleton() {
  return (
    <div className="rounded-xl overflow-hidden shadow-sm max-w-lg" aria-hidden="true">
      <Skeleton className="h-28 w-full rounded-none" />
      <div className="bg-secondary-0">
        <div className="-translate-y-14 flex relative items-center md:items-end flex-col md:flex-row">
          <Skeleton className="h-28 w-28 md:mr-7 rounded-full border-[6px] border-secondary-0" />
          <Skeleton className="h-6 w-32 md:mb-7 md:mr-2" />
        </div>
        <div className="flex justify-center">
          <div className="w-full p-3 max-w-sm mb-4 flex flex-col space-y-7">
            {[0, 1].map((i) => (
              <div key={i} className="space-y-2">
                <Skeleton className="h-4 w-28" />
                <Skeleton className="h-11 w-full rounded-lg" />
              </div>
            ))}
            <Skeleton className="h-11 w-full rounded-lg mt-4" />
          </div>
        </div>
      </div>
    </div>
  );
}
