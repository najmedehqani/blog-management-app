"use client";

import { useAuth } from "@/context/AuthContext";
import Skeleton from "@/ui/Skeleton";

function WellcomeMessage() {
  const { user, isLoading } = useAuth();
  return (
    <div className="bg-secondary-0 rounded-xl p-3 lg:p-4 max-w-2xl shadow-lg mb-10 text-secondary-700">
      {isLoading ? (
        <Skeleton className="h-4 w-24 inline-block ml-2" />
      ) : (
        <span className="font-black text-base ml-2"> {user?.name ? `${user.name} عزیز😍` : "کاربر عزیز😍"}</span>
      )}

      <span className="text-sm">
         خوش آمدی. اینجا ابزارهای تولید و مدیریت محتوایت آماده‌اند.
      </span>
    </div>
  );
}

export default WellcomeMessage;
