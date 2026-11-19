"use client";
import { useAuth } from "@/context/AuthContext";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import RHFTextField from "@/ui/RHFTextField";
import { useEffect } from "react";
import { updateProfileApi } from "@/services/authService";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import UploadAvatar from "./UploadAvatar";
import SubmitButton from "@/ui/SubmitButton";
const schema = yup
  .object({
    name: yup
      .string()
      .min(3, "نام و نام خانوادگی باید حداقل ۳ حرف باشد.")
      .max(30, "نام و نام خانوادگی باید حداکثر ۳۰ حرف باشد.")
      .required("نام و نام خانوادگی الزامی است."),
    email: yup
      .string()
      .email("ایمیل نامعتبر است.")
      .required("ایمیل الزامی است."),
  })
  .required();
function UpdateProfileForm() {
  const { user, getUser } = useAuth();
  const router = useRouter();
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onTouched",
    defaultValues: {},
  });
  useEffect(() => {
    if (user)
      reset({
        name: user.name,
        email: user.email,
      });
  }, [user?.name,user?.email]);

  const onSubmit = async (values) => {
    try {
      const { message } = await updateProfileApi(values);
      toast.success(message);
      router.push("/profile");
      await getUser();
    } catch (error) {
      toast.error(error?.response?.data?.message || "خطایی رخ داد");
    }
  };
  return (
    <div className="rounded-xl overflow-hidden shadow-sm">
      <div
        className="h-28 w-full bg-gradient-to-tl from-secondary-400 
      to-secondary-300/30 flex items-start justify-center md:items-center"
      >
        <p
          className="mt-4  md:mt-0 md:text-base text-secondary-600 px-2 py-1 rounded-lg bg-secondary-0
         font-bold text-sm"
        >
          از نوشتن لذت ببر!
        </p>
      </div>
      <div className="bg-secondary-0">
        <div className="-translate-y-14 flex relative items-center md:items-end flex-col md:flex-row ">
          <div
            className="h-28 w-28 border-[6px] border-secondary-0 md:mr-7 rounded-full relative flex
       items-center justify-center cursor-pointer bg-gradient-to-tl from-secondary-400 to-secondary-300"
          >
            <UploadAvatar />
          </div>
          <div className="md:mb-5 md:mr-2">
            <div className="font-bold text-secondary-700 text-xl">
              {user?.name}
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="w-full p-3 max-w-sm mb-4">
            <form
              className="flex flex-col space-y-7"
              onSubmit={handleSubmit(onSubmit)}
            >
              <RHFTextField
                label="نام و نام خانوادگی"
                name="name"
                register={register}
                isRequired
                errors={errors}
                disabled={isSubmitting}
              />
              <RHFTextField
                label="ایمیل"
                name="email"
                register={register}
                dir="ltr"
                isRequired
                errors={errors}
                disabled={isSubmitting}
              />
              <SubmitButton isSubmitting={isSubmitting}>تایید</SubmitButton>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpdateProfileForm;
