import Link from "next/link";
import Image from "next/image";

type PostCoverImageProps = {
  url: string;
  src: string;
  altText: string;
};

export function PostCoverImage({
  url = "#",
  src,
  altText,
}: PostCoverImageProps) {
  return (
    <Link className="h-full w-full overflow-hidden rounded-xl" href={url}>
      <Image
        className="h-full w-full object-cover object-center group-hover:scale-105 transition"
        src={src}
        width={1200}
        height={720}
        alt={altText}
        priority
      />
    </Link>
  );
}
