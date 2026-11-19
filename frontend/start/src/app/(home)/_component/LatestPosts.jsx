"use client";
import { useEffect, useRef } from "react";
import { usePosts } from "@/hooks/usePosts";
import Link from "next/link";
import PostCard from "app/(blogs)/blogs/_components/PostCard";
import LatestPostsSkeleton from "./LatestPostsSkeleton";
import { Reveal } from "animations/Reveal";

function LatestPosts() {
  const { posts = [], isLoadingPosts } = usePosts();
  const latestPosts = posts.slice(0, 5);
  const railRef = useRef(null);
  const pausedRef = useRef(false);

  useEffect(() => {
    const rail = railRef.current;
    if (!rail || latestPosts.length <= 1) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    // Scroll the rail (never the page) to a card, using live geometry so it
    // works identically in LTR and RTL and self-corrects each tick.
    const scrollToCard = (card) => {
      const railRect = rail.getBoundingClientRect();
      const cardRect = card.getBoundingClientRect();
      rail.scrollBy({
        left: cardRect.left - railRect.left,
        behavior: "smooth",
      });
    };

    let index = 0;
    const id = setInterval(() => {
      if (pausedRef.current) return;
      const cards = rail.children;
      if (!cards.length) return;
      index = (index + 1) % cards.length;
      scrollToCard(cards[index]);
    }, 2800);

    return () => clearInterval(id);
  }, [latestPosts.length]);

  if (isLoadingPosts) return <LatestPostsSkeleton/>;

  return (
   <Reveal>
     <div className="md:mb-28 mb-20 rounded-xl p-3 md:p-6 bg-no-repeat bg-cover bg-[linear-gradient(270deg,_rgb(var(--color-secondary-200))_0%,_rgb(var(--color-secondary-100))_100%)]">
      <div className="flex flex-col md:flex-row md:items-stretch gap-x-10 gap-y-8">
        <div className="flex flex-col items-center justify-start md:items-start md:justify-end gap-y-5 md:gap-y-6 text-secondary-700 flex-shrink-0 pb-0 md:pb-5">
          <h2 className="font-black text-2xl md:text-3xl">جدیدترین پست ها</h2>
          <Link href="/blogs" className="btn btn--primary px-8">
            همه پست ها
          </Link>
        </div>

        <div className="flex-1 min-w-0">
          <ul
            ref={railRef}
            dir="rtl"
            tabIndex={0}
            aria-label="جدیدترین پست ها"
            onMouseEnter={() => (pausedRef.current = true)}
            onMouseLeave={() => (pausedRef.current = false)}
            onFocus={() => (pausedRef.current = true)}
            onBlur={() => (pausedRef.current = false)}
            onTouchStart={() => (pausedRef.current = true)}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth py-5
            rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500
            focus-visible:ring-offset-4 focus-visible:ring-offset-secondary-200
            [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {latestPosts.map((post) => (
              <li
                key={post._id}
                className="snap-start shrink-0 w-[280px] max-w-[85vw]"
              >
                <PostCard post={post} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
   </Reveal>
  );
}

export default LatestPosts;
