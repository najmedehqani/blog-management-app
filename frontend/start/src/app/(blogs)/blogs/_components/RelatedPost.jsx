import Author from "./Author";
import CoverImage from "./CoverImage";

function RelatedPost({ posts }) {
  return (
    <div className=" mb-12">
      <p className="text-xl mb-4">پست های مرتبط</p>
      <div className="grid gap-5 grid-cols-6">
        {posts.map((item) => {
          return (
            <div
              key={item._id}
              className="col-span-6 md:col-span-3 lg:col-span-2 border border-secondary-200 rounded-lg"
            >
              <div className="rounded-lg overflow-hidden mb-2">
                <CoverImage {...item} />
              </div>
              <div className="p-2">
                <p className="mb-4 text-secondary-600">{item.title}</p>
                <div className="flex items-center justify-between">
                  <Author {...item.author} />
                  <div className="text-xs badge badge--secondary px-[10px]">
                    {item.category.title}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default RelatedPost;
