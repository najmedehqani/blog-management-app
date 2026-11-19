import Table from "@/ui/Table";
import { toLocalDateShort } from "@/utils/dateFormatter";
import { toPersianDigits } from "@/utils/numberFormatter";
import truncateText from "@/utils/truncateText";
import { DeletePost, UpdatePost } from "./Buttons";
// Static lookup — hoisted out so it isn't re-created on every render.
const TYPE_STYLE = {
  free: { label: "رایگان", className: "badge--success" },
  premium: { label: "پولی", className: "badge--secondary" },
};

function PostRow({ post, index }) {
  const { title, category, author, createdAt, type } = post;
  const typeBadge = TYPE_STYLE[type] ?? { label: type ?? "-", className: "" };
  return (
    <Table.Row>
      <td>{toPersianDigits(index + 1)}</td>
      <td>{truncateText(title,20)}</td>
      <td>{category.title}</td>
      <td>{author.name}</td>
      <td>{toLocalDateShort(createdAt)}</td>
      <td>
        <span className={`badge ${typeBadge.className}`}>
          {typeBadge.label}
        </span>
      </td>
      <td>
        <div className="flex items-center gap-x-3">
          <DeletePost post={post} />
          <UpdatePost id={post._id} />
        </div>
      </td>
    </Table.Row>
  );
}

export default PostRow;
