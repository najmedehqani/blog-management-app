"use client";

import { useAuth } from "@/context/AuthContext";
import EmptyState from "@/ui/EmptyState";
import Spinner from "@/ui/Spinner";

export default function GetUser({ children, fallback }) {
  const { user, isLoading } = useAuth();
  if (isLoading ) {
    return (
      fallback ?? (
        <div className="flex justify-center items-center">
          <Spinner />
        </div>
      )
    );
  }
   if (user) return children;
return <EmptyState description="اطلاعات کاربر دریافت نشد. لطفاً صفحه را دوباره بارگذاری کنید."/>
}
