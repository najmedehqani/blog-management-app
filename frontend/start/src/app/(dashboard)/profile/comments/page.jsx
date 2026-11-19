import { Suspense } from "react";
import CommentsTable from "./_/components/CommentsTable";
import CommentsTableSkeleton from "./_/components/CommentsTableSkeleton";
import ResourceListPage from "@/ui/ResourceListPage";
export const metadata = {
  title: "نظرات",
};
function CommentsPage() {
  return (
    <ResourceListPage title="لیست نظرات">
      <Suspense fallback={<CommentsTableSkeleton />}>
        <CommentsTable />
      </Suspense>
    </ResourceListPage>
  );
}

export default CommentsPage;
