import Link from "next/link";

function NotFound() {
  return (
      <div className="flex justify-center py-10">
        <div >
          <p className="text-xl font-bold text-red-600 mb-8">
            پستی با این مشخصات یافت نشد.
          </p>
          <Link href="/blogs" className="text-secondary-700">رفتن به صفحه پست ها؟</Link>
        </div>
      </div>
  
  );
}
export default NotFound;
