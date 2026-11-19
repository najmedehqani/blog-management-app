import Avatar from "@/ui/Avatar";
import Table from "@/ui/Table";
import { toLocalDateShort } from "@/utils/dateFormatter";
import { toPersianDigits } from "@/utils/numberFormatter";
import truncateText from "@/utils/truncateText";

function UserRow({ user, index }) {
  const {
    name,
    email,
    avatarUrl,
    createdAt,
    updatedAt,
    bookmarkedPosts,
    likedPosts,
  } = user;
  return (
    <Table.Row>
      <td>{toPersianDigits(index + 1)}</td>
      <td>
        <Avatar src={avatarUrl} name={name} />
      </td>
      <td>{name}</td>
      <td>{truncateText(email, 20,"ltr")}</td>
      <td>{toLocalDateShort(createdAt)}</td>
      <td>{toLocalDateShort(updatedAt)}</td>
      <td>{toPersianDigits(bookmarkedPosts.length)}</td>
      <td>{toPersianDigits(likedPosts.length)}</td>
    </Table.Row>
  );
}

export default UserRow;
