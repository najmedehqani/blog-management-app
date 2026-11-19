import Image from "next/image";
function EmptyState({ description }) {
  return (
    <div className="flex flex-col items-center justify-center">
      <Image
        src="/images/icon.svg"
        width={176}
        height={194}
        alt="آیکون وضعیت خالی"
      />
      {description && (
        <p className="text-secondary-700 text-sm md:text-base text-center font-bold">
          {description}
        </p>
      )}
    </div>
  );
}

export default EmptyState;
