import { getPosts } from "@/services/postServices";
import { useQuery } from "@tanstack/react-query";

export function usePosts() {
  const { data, isLoading: isLoadingPosts } = useQuery({
    queryKey: ["posts"],
    queryFn: () => getPosts("limit=999"),
  });
  const { posts } = data || {};
  return { posts, isLoadingPosts };
}
