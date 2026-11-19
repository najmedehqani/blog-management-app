import Footer from "@/components/Footer";
import Header from "@/components/Header";

function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="container xl:max-w-screen-xl flex-1">{children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
