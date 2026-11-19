"use client";

import { useAuth } from "@/context/AuthContext";
import { useEffect, useState } from "react";
import SpinnerMini from "@/ui/SpinnerMini";
import Image from "next/image";
import { CameraIcon } from "@heroicons/react/24/outline";
import { useUploadAvatar } from "../useUploadAvatar";
import toast from "react-hot-toast";

const VALID_IMAGE_TYPES = ["image/jpeg", "image/png"];
const MAX_IMAGE_SIZE = 5 * 1024 * 1024;

function UploadAvatar() {
  const { user} = useAuth();
  const [avatarUrl, setAvatarUrl] = useState(null);
  const { isUploading, uploadImg } = useUploadAvatar();

  useEffect(() => {
    if (user?.avatarUrl) {
      setAvatarUrl(user.avatarUrl);
    }
  }, [user?.avatarUrl]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    e.target.value = "";
    if (!VALID_IMAGE_TYPES.includes(file.type)) {
      toast.error("لطفاً فقط فایل PNG یا JPG انتخاب کنید");
      return;
    }
    if (file.size > MAX_IMAGE_SIZE) {
      toast.error("حجم تصویر نباید بیشتر از 5 مگابایت باشد");
      return;
    }
    const preview = URL.createObjectURL(file);
    setAvatarUrl(preview);
    const formData = new FormData();
    formData.append("avatar", file);
    uploadImg(formData, {
      onError: () => {
        setAvatarUrl(user?.avatarUrl || null);
      },
    });
  };
  useEffect(() => {
    return () => {
      if (avatarUrl && avatarUrl.startsWith("blob:")) {
        URL.revokeObjectURL(avatarUrl);
      }
    };
  }, [avatarUrl]);
  return (
    <>
      {avatarUrl ? (
        <div
          className={`relative w-full h-full transition duration-200 ease-out ${isUploading ? "blur-sm" : ""}`}
        >
          <Image
            src={avatarUrl}
            alt={user?.name || "آواتار کاربر"}
            fill
            unoptimized={avatarUrl?.startsWith("blob:")}
            sizes="112px"
            className="object-cover ring-2 ring-secondary-200 overflow-hidden rounded-full object-center"
          />
        </div>
      ) : (
        <div className="flex items-center justify-center w-full h-full ">
          <CameraIcon className="w-11 h-11 text-secondary-0" />
        </div>
      )}
      {isUploading && (
        <div className="absolute inset-0 flex items-center justify-center z-10 cursor-not-allowed">
          <SpinnerMini />
        </div>
      )}
      <label
        className="cursor-pointer absolute inset-0 rounded-full has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-primary-600"
      >
        <input
          type="file"
          accept="image/jpeg,image/png"
          onChange={handleFileChange}
          className="sr-only"
          disabled={isUploading}
           aria-label="تغییر عکس پروفایل"
        />
      </label>
    </>
  );
}

export default UploadAvatar;
