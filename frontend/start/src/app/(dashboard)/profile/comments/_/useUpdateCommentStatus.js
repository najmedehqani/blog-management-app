import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { updateCommentStatusApi } from "@/services/commentService";
import { revalidatePosts } from "@/lib/actions";

export default function useUpdateCommentStatus() {
  const queryClient = useQueryClient();

  const { isPending: isUpdating, mutate: updateCommentStatus } = useMutation({
    mutationFn: updateCommentStatusApi,
    onSuccess: (data, variables) => {
      toast.success(data.message);
      queryClient.invalidateQueries({
        queryKey: ["comments"],
      });
    revalidatePosts(variables.slug);
    },
    onError: (err) => {
      toast.error(
        err?.response?.data?.message || "خطایی در ویرایش کامنت رخ داده است.",
      );
    },
  });

  return { isUpdating, updateCommentStatus };
}
