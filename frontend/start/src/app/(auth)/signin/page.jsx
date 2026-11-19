"use client";
import RHFTextField from "@/ui/RHFTextField";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import { useState } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import SubmitButton from "@/ui/SubmitButton";

const schema = yup
  .object({
    email: yup
      .string()
      .email("ایمیل نامعتبر است.")
      .required("ایمیل الزامی است."),
    password: yup
      .string()
      .required("رمز عبور الزامی است.")
      .min(8, "رمز عبور باید حداقل ۸ کاراکتر باشد."),
  })
  .required();

function SigninPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onTouched",
  });
  const { signin } = useAuth();

  const onSubmit = async (values) => {
    await signin(values);
  };
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="bg-secondary-0 p-8 md:p-6 lg:p-8 rounded-2xl shadow-md">
      <h1 className="text-xl font-bold mb-6 text-secondary-700 text-center">
        ورود به حساب کاربری
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-10">
        <RHFTextField
          label="ایمیل"
          name="email"
          register={register}
          dir="ltr"
          isRequired
          errors={errors}
          disabled={isSubmitting}
        />
        <div className="relative">
          <RHFTextField
            label="رمز عبور"
            name="password"
            register={register}
            type={showPassword ? "text" : "password"}
            dir="ltr"
            isRequired
            errors={errors}
            disabled={isSubmitting}
          />
          <button
            aria-label={showPassword ? "پنهان کردن رمز عبور" : "نمایش رمز عبور"}
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute top-11 right-0 flex items-center px-3 text-secondary-400"
          >
            {showPassword ? (
              <EyeSlashIcon className="h-5 w-5" />
            ) : (
              <EyeIcon className="h-5 w-5" />
            )}
          </button>
        </div>
        <SubmitButton isSubmitting={isSubmitting}>ورود</SubmitButton>
      </form>
      <p className="mt-6 text-center text-sm text-secondary-500 flex justify-center items-center gap-2">
        <span> حساب کاربری ندارید؟</span>
        <Link
         prefetch={false}
          href="/signup"
          className="text-secondary-700 font-medium hover:underline hover:text-primary-900"
        >
          ثبت نام
        </Link>
      </p>
    </div>
  );
}

export default SigninPage;
