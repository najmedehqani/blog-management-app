import { getPosts } from "@/services/postServices";
import Table from "@/ui/Table";
import PostRow from "./PostRow";
import EmptyState from "@/ui/EmptyState";

async function PostsTable({query=""}) {
  const {posts} = await getPosts(query);

  if (!posts.length) return <EmptyState description="پستی برای نمایش وجود ندارد."/>;
  return (
    <Table>
      <Table.Header>
        <th>#</th>
        <th>عنوان</th>
        <th>دسته بندی</th>
        <th>نویسنده</th>
        <th>تاریخ ایجاد</th>
        <th>نوع</th>
        <th>عملیات</th>
      </Table.Header>
      <Table.Body>
        {posts.map((post, index) => (
          <PostRow key={post._id} post={post} index={index} />
        ))}
      </Table.Body>
    </Table>
  );
}

export default PostsTable;
