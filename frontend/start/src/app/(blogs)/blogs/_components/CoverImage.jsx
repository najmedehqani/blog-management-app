import Link from "next/link";
import Image from "next/image";
function CoverImage({ title, coverImageUrl, slug }) {
  return (
    <div className="relative aspect-video overflow-hidden mb-1">
      <Link href={`/blogs/${slug}`}>
        <Image
          src={coverImageUrl}
          alt={title}
          fill
          className="object-cover object-center w-full h-full hover:scale-110 transition-all duration-300 ease-out"
        />
      </Link>
    </div>
  );
}

export default CoverImage;
