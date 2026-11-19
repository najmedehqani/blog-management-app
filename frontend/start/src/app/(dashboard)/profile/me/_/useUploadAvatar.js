import { useAuth } from "@/context/AuthContext";
import { uploadAvatarApi } from "@/services/authService";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export function useUploadAvatar() {
  const queryClient = useQueryClient();
  const { getUser } = useAuth();
  const { isPending: isUploading, mutate: uploadImg } = useMutation({
    mutationFn: uploadAvatarApi,
    onSuccess: async (data) => {
      toast.success(data.message);
      await getUser({ skipLoading: true });
      queryClient.invalidateQueries({
        queryKey: ["users"],
      });
    },
    onError: (err) => {
      toast.error(err?.response?.data?.message || "خطایی رخ داد");
    },
  });
  return {
    isUploading,
    uploadImg,
  };
}
