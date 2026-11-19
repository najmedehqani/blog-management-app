import { revalidatePosts } from "@/lib/actions";
import { deleteCommentApi } from "@/services/commentService";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export default function useDeleteComment() {
  const queryClient = useQueryClient();
  const { isPending: isDeleting, mutate: deleteComment } = useMutation({
    mutationFn: deleteCommentApi,
    onSuccess: (data, variables) => {
      toast.success(data.message);
      queryClient.invalidateQueries({
        queryKey: ["comments"],
      });
       revalidatePosts(variables.slug);
    },
    onError: (err) => {
      toast.error(err?.response?.data?.message || "خطایی در حذف کامنت رخ داده است.");
    },
  });
  return {
    isDeleting,
    deleteComment,
  };
}
