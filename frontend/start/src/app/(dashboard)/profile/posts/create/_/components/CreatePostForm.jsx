"use client";
import { useCategories } from "@/hooks/useCategories";
import ButtonIcon from "@/ui/ButtonIcon";
import FileInput from "@/ui/FileInput";
import RHFSelect from "@/ui/RHFSelect";
import RHFTextField from "@/ui/RHFTextField";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { yupResolver } from "@hookform/resolvers/yup";
import Image from "next/image";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { imageUrlToFile } from "@/utils/fileFormatter";
import useCreatPost from "../useCreatePost";
import useEditPost from "../useEditPost";
import toast from "react-hot-toast";
import SubmitButton from "@/ui/SubmitButton";
const schema = yup
  .object({
    title: yup
      .string()
      .required("عنوان ضروری است")
      .min(5, "حداقل ۵ کاراکتر را وارد کنید"),
    briefText: yup
      .string()
      .required("توضیحات ضروری است")
      .min(10, "حداقل ۱۰ کاراکتر را وارد کنید"),
    text: yup
      .string()
      .required("توضیحات ضروری است")
      .min(10, "حداقل ۱۰ کاراکتر را وارد کنید"),
    slug: yup
      .string()
      .required("اسلاگ ضروری است")
      .matches(
        /^[a-z0-9]+(?:-[a-z0-9]+)*$/,
        "اسلاگ فقط باید شامل حروف انگلیسی کوچک، عدد و خط تیره باشد",
      ),
    readingTime: yup
      .number()
      .transform((value, originalValue) =>
        originalValue === "" ? undefined : value,
      )
      .positive("یک عدد مثبت وارد کنید.")
      .integer("یک عدد صحیح وارد کنید.")
      .required("زمان مطالعه ضروری است")
      .typeError("یک عدد را وارد کنید"),
    category: yup.string().required("دسته بندی ضروری است"),
    coverImage: yup.mixed().required("کاور پست الزامی است"),
  })
  .required();

const VALID_IMAGE_TYPES = ["image/jpeg", "image/png"];
const MAX_IMAGE_SIZE = 5 * 1024 * 1024;

function CreatePostForm({ postToEdit = {} }) {
  const router = useRouter();

  const { _id: editId } = postToEdit;
  const isEditSession = Boolean(editId);

  const { isCreating, createPost } = useCreatPost();
  const { editPost, isEditing } = useEditPost();
  const isSubmitting = isCreating || isEditing;

  const { categories, isLoading: isLoadingCategories } = useCategories();

  const [coverImageUrl, setCoverImageUrl] = useState(
    postToEdit.coverImageUrl || null,
  );

  const { title, briefText, text, slug, readingTime } = postToEdit;
  const editValues = isEditSession
    ? {
        title,
        briefText,
        text,
        slug,
        readingTime,
        category: "",
      }
    : {
        category: "",
      };

  const {
    control,
    setValue,
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    mode: "onTouched",
    resolver: yupResolver(schema),
    defaultValues: editValues,
  });

  const onSubmit = (data) => {
    const formData = new FormData();
    for (const key in data) {
      formData.append(key, data[key]);
    }

    // The posts list is a Server Component, so router.refresh() is required to
    // re-fetch it — invalidateQueries only refreshes the client ["posts"] cache.
    if (isEditSession) {
      editPost(
        { id: editId, data: formData },
        {
          onSuccess: () => {
            reset();
            setCoverImageUrl(null);
            router.push("/profile/posts", { scroll: false });
            router.refresh();
          },
        },
      );
    } else {
      createPost(formData, {
        onSuccess: () => {
          reset();
          setCoverImageUrl(null);
          router.push("/profile/posts", { scroll: false });
          router.refresh();
        },
      });
    }
  };
  const handleCoverImageChange = (event, onChange) => {
    const file = event.target.files[0];
    if (!file) return;
    event.target.value = "";
    if (!VALID_IMAGE_TYPES.includes(file.type)) {
      toast.error("لطفاً فقط فایل PNG یا JPG انتخاب کنید");
      return;
    }
    if (file.size > MAX_IMAGE_SIZE) {
      toast.error("حجم تصویر نباید بیشتر از 5 مگابایت باشد");
      return;
    }
    onChange(file);
    setCoverImageUrl(URL.createObjectURL(file));
  };
  const categorySyncedRef = useRef(false);
  useEffect(() => {
    if (
      !categorySyncedRef.current &&
      postToEdit.category?._id &&
      categories?.length > 0
    ) {
      setValue("category", postToEdit.category._id);
      categorySyncedRef.current = true;
    }
  }, [categories, postToEdit.category?._id, setValue]);

  useEffect(() => {
    if (editId && postToEdit?.coverImageUrl) {
      imageUrlToFile(postToEdit.coverImageUrl)
        .then((file) => {
          setValue("coverImage", file, { shouldValidate: true });
        })
        .catch(() => {
          toast.error("دریافت تصویر ناموفق بود، لطفاً یک عکس دیگر انتخاب کنید");
          setCoverImageUrl(null);
        });
    }
  }, [editId, setValue]);

  useEffect(() => {
    return () => {
      if (coverImageUrl && coverImageUrl.startsWith("blob:")) {
        URL.revokeObjectURL(coverImageUrl);
      }
    };
  }, [coverImageUrl]);
  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <RHFTextField
        name="title"
        label="عنوان"
        register={register}
        errors={errors}
        isRequired
        disabled={isSubmitting}
      />
      <RHFTextField
        name="briefText"
        label="متن کوتاه"
        register={register}
        errors={errors}
        isRequired
        disabled={isSubmitting}
      />
      <RHFTextField
        name="text"
        label="متن"
        register={register}
        errors={errors}
        isRequired
        disabled={isSubmitting}
      />
      <RHFTextField
        name="slug"
        label="اسلاگ"
        register={register}
        errors={errors}
        isRequired
        dir="ltr"
        disabled={isSubmitting}
      />
      <RHFTextField
        name="readingTime"
        label="زمان مطالعه"
        register={register}
        errors={errors}
        isRequired
        disabled={isSubmitting}
      />

      <RHFSelect
        name="category"
        label="دسته بندی"
        register={register}
        errors={errors}
        isRequired
        options={categories}
        placeholder={
          isLoadingCategories ? "در حال بارگذاری..." : "یک دسته را انتخاب کنید"
        }
        disabled={isSubmitting || isLoadingCategories}
      />
      <Controller
        name="coverImage"
        control={control}
        render={({ field: { onChange, ref, onBlur } }) => {
          return (
            <FileInput
              ref={ref}
              name="coverImage"
              errors={errors}
              accept="image/png,image/jpeg"
              disabled={isSubmitting}
              label="انتخاب کاور پست"
              onBlur={onBlur}
              onChange={(event) => handleCoverImageChange(event, onChange)}
            />
          );
        }}
      />
      {coverImageUrl && (
        <div className="relative aspect-video overflow-hidden rounded-lg">
          <Image
            fill
            src={coverImageUrl}
            alt="پیش‌نمایش کاور پست"
            className="object-cover object-center"
          />
          <ButtonIcon
            aria-label="حذف کاور پست"
            onClick={() => {
              setCoverImageUrl(null);
              setValue("coverImage", null, { shouldValidate: true });
            }}
            variant="red"
            className="absolute left-1 top-1 w-6 h-6"
          >
            <XMarkIcon />
          </ButtonIcon>
        </div>
      )}
      <SubmitButton isSubmitting={isSubmitting}>تایید</SubmitButton>
    </form>
  );
}

export default CreatePostForm;
