import Table from "@/ui/Table";
import { toLocalDateShort } from "@/utils/dateFormatter";
import { toPersianDigits } from "@/utils/numberFormatter";
import truncateText from "@/utils/truncateText";
import { DeleteComment, UpdateStatusBtn } from "./Buttons";
const statusStyle = [
  {
    label: "رد شده",
    className: "badge--danger",
  },
  {
    label: "در انتظار تایید",
    className: "badge--secondary",
  },
  {
    label: "تایید شده",
    className: "badge--success",
  },
];

function CommentRow({ comment, index }) {
  const { content, user, createdAt, status } = comment;
  const text = content?.text ?? "";
  const name = user?.name ?? "-";
  const statusBadge = statusStyle[status] ?? { label: "-", className: "" };
  return (
    <Table.Row>
      <td>{toPersianDigits(index + 1)}</td>
      <td>{truncateText(text, 30)}</td>
      <td>{name}</td>
      <td>{toLocalDateShort(createdAt)}</td>
      <td>
        <span className={` badge ${statusBadge.className}`}>
          {statusBadge.label}
        </span>
      </td>
      <td>
        <div className="flex items-center gap-x-3">
          <DeleteComment id={comment._id} slug={comment.post?.slug}/>
          <UpdateStatusBtn comment={comment} />
        </div>
      </td>
    </Table.Row>
  );
}

export default CommentRow;
