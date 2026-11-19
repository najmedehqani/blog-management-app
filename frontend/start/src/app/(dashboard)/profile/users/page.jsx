import { Suspense } from "react";
import UsersTable from "./_components/UsersTable";
import UsersTableSkeleton from "./_components/UsersTableSkeleton";
import ResourceListPage from "@/ui/ResourceListPage";

export const metadata = {
  title: "کاربران",
};

function UsersPage() {
  return (
    <ResourceListPage title="لیست کاربران">
      <Suspense fallback={<UsersTableSkeleton />}>
        <UsersTable />
      </Suspense>
    </ResourceListPage>
  );
}

export default UsersPage;
