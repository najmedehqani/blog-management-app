import Table from "@/ui/Table";
import { toPersianDigits } from "@/utils/numberFormatter";
import truncateText from "@/utils/truncateText";
import { DeleteCategory, UpdateCategory } from "./Buttons";

function CategoryRow({ category, index }) {
  const { title, englishTitle, description} = category;
  return (
    <Table.Row>
      <td>{toPersianDigits(index + 1)}</td>
      <td>{truncateText(title, 20)}</td>
      <td>{truncateText(englishTitle, 20)}</td>
      <td>{truncateText(description, 20)}</td>
      <td>
        <div className="flex items-center gap-x-3">
          <UpdateCategory category={category}  />
          <DeleteCategory category={category} />
        </div>
      </td>
    </Table.Row>
  );
}

export default CategoryRow;
