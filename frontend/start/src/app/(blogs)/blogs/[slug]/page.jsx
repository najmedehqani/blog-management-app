import { getPostBySlug, getPosts } from "@/services/postServices";
import Image from "next/image";
import { notFound } from "next/navigation";
import RelatedPost from "../_components/RelatedPost";
import PostComment from "../_components/comment/PostComment";

export const dynamicParams = true;

export async function generateStaticParams() {
  const { posts = [] } = await getPosts("limit=999");
  return posts.map((post) => ({ slug: post.slug }));
}
export async function generateMetadata({ params }) {
  const res = await params;
  const postSlug = res.slug;
  const post = await getPostBySlug(postSlug);
  return {
    title: `پست ${post.title}`,
  };
}
async function SinglePost({ params }) {
  // await new Promise((res) => setTimeout(() => res(), 2000))
  const res = await params;
  const postSlug = res.slug;
  const post = await getPostBySlug(postSlug);
  if (!post) return notFound();
  return (
    <div className="text-secondary-600 max-w-screen-md mx-auto mt-12">
      <h1 className="text-secondary-700 text-2xl font-bold mb-8">
        {post.title}
      </h1>
      <p className="mb-4">{post.briefText}</p>
      <p className="mb-8">{post.text}</p>
      <div className="relative aspect-video overflow-hidden rounded-lg mb-12">
        <Image
          className="object-cover object-center hover:scale-110 transition-all ease-out duration-300"
          fill
          src={post.coverImageUrl}
          alt={post.title}
        />
      </div>
      {post.related.length > 0 && <RelatedPost posts={post.related} />}
      <PostComment post={post} />
    </div>
  );
}

export default SinglePost;
