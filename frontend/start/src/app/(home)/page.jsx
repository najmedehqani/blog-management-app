import { Suspense } from "react";
import CategorySection from "./_component/CategorySection";
import HeroSection from "./_component/HeroSection";
import Features from "./_component/Features";
import SearchSection from "./_component/SearchSection";
import Header from "@/components/Header";
import TopAuthors from "./_component/TopAuthors";
import Footer from "@/components/Footer";
import LatestPosts from "./_component/LatestPosts";
import FAQ from "./_component/FAQ";
import { Reveal } from "../../animations/Reveal";
import CategorySectionSkeleton from "./_component/CategorySectionSkeleton";
export const metadata = {
  title: "خانه  - وب اپلیکیشن مدیریت بلاگ",
};

export default function Home() {
  return (
    <>
      <Header />
      <div className="container xl:max-w-screen-xl ">
        <HeroSection />
        <Reveal>
          <SearchSection />
        </Reveal>
        <LatestPosts />
        <Suspense fallback={<CategorySectionSkeleton />}>
          <Reveal>
            <CategorySection />
          </Reveal>
        </Suspense>
        <Reveal>
          <Features />
        </Reveal>
        <TopAuthors />
        <Reveal>
          <FAQ />
        </Reveal>
      </div>
      <Reveal>
        <Footer />
      </Reveal>
    </>
  );
}
