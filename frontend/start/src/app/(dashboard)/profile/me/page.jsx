import GetUser from "./_/components/GetUser";
import UpdateProfileForm from "./_/components/UpdateProfileForm";
import ProfileFormSkeleton from "./_/components/ProfileFormSkeleton";

export const metadata = {
  title: "پروفایل",
};

function UpdateProfilePage() {
  return (
    <GetUser fallback={<ProfileFormSkeleton />}>
      <div className="max-w-lg">
        <h2 className="font-bold text-xl lg:text-2xl text-secondary-700 mb-6">
          اطلاعات حساب کاربری
        </h2>
        <UpdateProfileForm />
      </div>
    </GetUser>
  );
}

export default UpdateProfilePage;
