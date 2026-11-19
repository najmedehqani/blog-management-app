"use client";
import RHFTextField from "@/ui/RHFTextField";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import useCreatCategory from "../useCreateCategory";
import { useRouter } from "next/navigation";
import useEditCategory from "../useEditCategory";
import SubmitButton from "@/ui/SubmitButton";

const schema = yup
  .object({
    title: yup
      .string()
      .min(5, "حداقل ۵ کاراکتر را وارد کنید")
      .required("عنوان ضروری است"),
    englishTitle: yup
      .string()
      .min(5, "حداقل ۵ کاراکتر را وارد کنید")
      .required("عنوان انگلیسی ضروری است."),
    description: yup
      .string()
      .min(10, "حداقل ۱۰ کاراکتر را وارد کنید")
      .required("توضیحات ضروری است"),
  })
  .required();

export default function CreateCategoryForm({ categortToEdit = {}, onClose }) {
  const { _id: editId } = categortToEdit;
  const isEditSession = Boolean(editId);
  const { title, englishTitle, description } = categortToEdit;
  let editValues;
  if (isEditSession) {
    editValues = {
      title,
      englishTitle,
      description,
    };
  }

  const { isCreating, createCategory } = useCreatCategory();
  const { editCategory, isEditing } = useEditCategory();
  const isSubmitting = isCreating || isEditing;
  const router = useRouter();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: "onTouched",
    resolver: yupResolver(schema),
    defaultValues: editValues,
  });

  const onSubmit = (data) => {
    if (isEditSession) {
      editCategory(
        { id: editId, data },
        {
          onSuccess: () => {
            onClose();
            router.refresh();
          },
        },
      );
    } else {
      createCategory(data, {
        onSuccess: () => {
          router.push("/profile/categories", { scroll: false });
          // The list is a Server Component — refresh so the new row shows.
          router.refresh();
        },
      });
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <RHFTextField
        label="عنوان"
        name="title"
        errors={errors}
        register={register}
        isRequired
        disabled={isSubmitting}
      />
      <RHFTextField
        label="عنوان انگلیسی"
        name="englishTitle"
        errors={errors}
        register={register}
        isRequired
        dir="ltr"
        disabled={isSubmitting}
      />
      <RHFTextField
        label="توضیحات"
        name="description"
        errors={errors}
        register={register}
        isRequired
        disabled={isSubmitting}
      />
      <SubmitButton isSubmitting={isSubmitting}>تایید</SubmitButton>
    </form>
  );
}
