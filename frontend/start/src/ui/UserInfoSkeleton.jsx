import Skeleton from "@/ui/Skeleton.jsx";


function UserInfoSkeleton() {
  return (
    <div
      role="status"
      aria-label="در حال بارگذاری اطلاعات کاربر"
      className="flex items-center gap-x-1 w-full"
    >
      <Skeleton className="w-8 h-8 !rounded-full flex-shrink-0" />
      <div className="flex flex-col flex-1 min-w-0 gap-y-1">
        <Skeleton className="h-2 w-20" />
        <Skeleton className="h-3 w-28" />
      </div>
    </div>
  );
}

export default UserInfoSkeleton;
