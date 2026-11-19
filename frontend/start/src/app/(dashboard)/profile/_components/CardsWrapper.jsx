import { fetchCardData } from "@/services/data";
import StatCard from "./StatCard";

async function CardsWrapper() {
  const { numberOfComments, numberOfPosts, numberOfUsers } =
    await fetchCardData();
  return (
    <div className="grid gap-6 md:grid-cols-3 mb-8">
      <StatCard value={numberOfComments} type="comments" title="کامنت ها" />
      <StatCard value={numberOfPosts} type="posts" title="پست ها" />
      <StatCard value={numberOfUsers} type="users" title="کاربران" />
    </div>
  );
}

export default CardsWrapper;
