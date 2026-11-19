import Breadcrumbs from "@/ui/BreadCrumbs";
import { getPostById } from "@/services/postServices";
import { notFound } from "next/navigation";
import CreatePostForm from "../../create/_/components/CreatePostForm";
export const metadata = {
  title: "ویرایش پست",
};
async function EditPage({ params }) {
  const awaitParams = await params;
  const id = await awaitParams.postId;
  const { post } = await getPostById(id);
  if (!post) return notFound();
  return (
    <div>
      <Breadcrumbs
        breadcrumbs={[
          {
            label: "پست ها",
            href: "/profile/posts",
          },
          {
            label: "ویرایش پست",
            href: `/profile/posts/${id}/edit`,
            active: true,
          },
        ]}
      />
      <CreatePostForm postToEdit={post} />
    </div>
  );
}

export default EditPage;
