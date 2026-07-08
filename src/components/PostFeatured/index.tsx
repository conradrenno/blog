import clsx from "clsx";
import { PostCoverImage } from "../PostCoverImage";
import { PostHeading } from "../PostHeading";

export function PostFeatured() {
  return (
    <section className="grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group">
      <PostCoverImage
        url="#"
        src="/images/bryen_0.png"
        altText="Titulo do post"
      />
      <div className={clsx("flex flex-col gap-4 sm:justify-center")}>
        <time className="text-slate-600 text-sm/tight" dateTime="2026-07-03">
          03/07/2026 11:00
        </time>
        <PostHeading url="#" as="h1">
          Titulo do post
        </PostHeading>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod,
          nunc ut Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          euismod, nunc ut Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Sed euismod, nunc ut Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Sed euismod, nunc ut
        </p>
      </div>
    </section>
  );
}
