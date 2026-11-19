import { getAllCommentsApi } from "@/services/commentService";
import { cookies } from "next/headers";
import setCookiesOnReq from "@/utils/setCookieOnReq";
import Table from "@/ui/Table";
import CommentRow from "./CommentRow";
import EmptyState from "@/ui/EmptyState";

async function CommentsTable() {
  const cookieStore = await cookies();
  const options = setCookiesOnReq(cookieStore);
  const { comments } = await getAllCommentsApi(options);
  if (!comments.length) return <EmptyState description="هنوز کامنتی ثبت نشده است."/>;
  return (
    <Table>
      <Table.Header>
        <th>#</th>
        <th>متن</th>
        <th>نویسنده</th>
        <th>تاریخ ایجاد</th>
        <th>وضعیت</th>
        <th>عملیات</th>
      </Table.Header>
      <Table.Body>
        {comments.map((comment, index) => (
          <CommentRow key={comment._id} comment={comment} index={index} />
        ))}
      </Table.Body>
    </Table>
  );
}

export default CommentsTable;
