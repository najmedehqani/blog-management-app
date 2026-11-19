import SideBar from "@/ui/SideBar";
import Header from "./profile/_components/Header";
import PannelNavLinks from "./profile/_components/PannelNavLinks";

export const metadata = {
  title: {
    template: "پنل کاربری - %s",
    default: "پنل کاربری",
  },
  description: "وب اپلیکشن مدیریت بلاگ ها و نظرات کاربران",
};

export default function Layout({ children }) {
  return (
    <div className="bg-secondary-0">
      <div className="grid grid-cols-12 h-screen">
        <aside className="col-span-12 lg:col-span-3 xl:col-span-2 hidden lg:block">
          <SideBar>
            <PannelNavLinks />
          </SideBar>
        </aside>
        <div className="col-span-12 lg:col-span-9 xl:col-span-10 flex flex-col h-screen">
          <Header />
          <main className="bg-secondary-100 rounded-tr-3xl p-4 md:p-6 lg:p-10 flex-1 overflow-y-auto">
            <div className="xl:max-w-screen-xl">{children}</div>
          </main>
        </div>
      </div>
    </div>
  );
}
