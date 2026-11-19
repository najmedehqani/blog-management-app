import PostCardSkeleton from "../_components/PostCardSkeleton";

// Scoped to the (PostList) segment, so the masthead + sidebar (from layout.jsx)
// stay put and only the results area shows the card skeletons.
function Loading() {
  return (
    <div className="mb-12 grid grid-cols-12 gap-8">
      {Array.from({ length: 6 }).map((_, i) => (
        <PostCardSkeleton key={i} />
      ))}
    </div>
  );
}

export default Loading;
