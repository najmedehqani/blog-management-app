"use client";
import useMoveBack from "@/hooks/useMoveBack";
import Button from "@/ui/Button";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

function NotFound() {
  const moveBack = useMoveBack();

  return (
    <div className="container xl:max-w-screen-xl">
      <div className="flex flex-col items-center pt-10">
        <div className="w-full max-w-[462px]">
          <Image
            src="/images/404-computer.svg"
            width={462}
            height={432}
            alt="404"
            priority
          />
        </div>
        <div>
          <h1 className="text-xl font-bold text-secondary-700 mb-6">
            صفحه ای که دنبالش بودید، پیدا نشد
          </h1>
          <Button
            onClick={moveBack}
            className="flex items-center gap-x-1 text-white"
          >
            <ArrowRightIcon className="w-5 h-5 text-white" />
            <span> برگشت</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
export default NotFound;
