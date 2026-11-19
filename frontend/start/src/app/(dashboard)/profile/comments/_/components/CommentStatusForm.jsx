"use client";

import { useForm } from "react-hook-form";
import RHFSelect from "@/ui/RHFSelect";
import { useRouter } from "next/navigation";
import useUpdateCommentStatus from "../useUpdateCommentStatus";
import SubmitButton from "@/ui/SubmitButton";

const options = [
  { id: 1, label: "رد شده", value: "0" },
  { id: 2, label: "در انتظار تایید", value: "1" },
  { id: 3, label: "قبول", value: "2" },
];

function CommentStatusForm({ comment, onClose }) {
  const { isUpdating, updateCommentStatus } = useUpdateCommentStatus();
  const router = useRouter();

  const {
    register,
    formState: { errors, isDirty },
    handleSubmit,
  } = useForm({ defaultValues: { status: String(comment.status) } });

  const onSubmit = (data) => {
    if (!isDirty) {
      onClose();
      return;
    }
    updateCommentStatus(
      {
        id: comment._id,
        data,
        slug: comment.post?.slug,
      },
      {
        onSuccess: () => {
          onClose();
          router.refresh();
        },
      },
    );
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form space-y-4">
      <RHFSelect
        label="تغییر وضعیت"
        isRequired
        name="status"
        errors={errors}
        register={register}
        options={options}
        disabled={isUpdating}
      />
      <SubmitButton isSubmitting={isUpdating}>تایید</SubmitButton>
    </form>
  );
}

export default CommentStatusForm;
