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
    name: yup
      .string()
      .required("نام و نام خانوادگی الزامی است.")
      .min(5, "نام و نام خانوادگی نامعتبر است.")
      .max(50, "نام و نام خانوادگی نامعتبر است."),
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

function SignupPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onTouched",
  });

  const { signup } = useAuth();
  const onSubmit = async (values) => {
    await signup(values);
  };
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className=" bg-secondary-0 p-8 md:p-6 lg:p-8 rounded-2xl shadow-md">
      <h1 className="text-xl font-bold mb-6 text-secondary-700 text-center">
        ثبت‌ نام در سایت
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-8">
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
        <SubmitButton isSubmitting={isSubmitting}>ثبت نام</SubmitButton>
      </form>
      <p className="mt-6 text-center text-sm text-secondary-500 flex justify-center items-center gap-2">
        <span> حساب کاربری دارید؟</span>
        <Link
          href="/signin"
          className="text-secondary-700 font-medium hover:underline hover:text-primary-900"
        >
          ورود
        </Link>
      </p>
    </div>
  );
}

export default SignupPage;
