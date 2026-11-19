import { cookies } from "next/headers";
import setCookiesOnReq from "@/utils/setCookieOnReq";
import { getAllUsersApi } from "@/services/authService";
import UserRow from "./UserRow";
import Table from "@/ui/Table";
import Empty from "@/ui/Empty";
import EmptyState from "@/ui/EmptyState";

async function UsersTable() {
  const cookieStore = await cookies();
  const options = setCookiesOnReq(cookieStore);
  const { users } = await getAllUsersApi(options);
  if (!users.length) return <EmptyState description="هنوز کاربری ثبت نشده است."/>;
  return (
    <Table>
      <Table.Header>
        <th>#</th>
        <th>آواتار</th>
        <th>نام</th>
        <th>ایمیل</th>
        <th>تاریخ عضویت</th>
        <th>آخرین آپدیت</th>
        <th>تعداد بوکمارک ها</th>
        <th>تعداد لایک ها</th>
      </Table.Header>
      <Table.Body>
        {users.map((user, index) => (
          <UserRow key={user._id} user={user} index={index} />
        ))}
      </Table.Body>
    </Table>
  );
}

export default UsersTable;
