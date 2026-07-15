import clsx from "clsx";
import { PostCoverImage } from "../PostCoverImage";
import { PostHeading } from "../PostHeading";
import { PostSummary } from "../PostSummary";

export function PostFeatured() {
  const slug = "titulo-do-post";
  const postLink = `/post/${slug}`;

  return (
    <section className="grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group">
      <PostCoverImage
        url="#"
        src="/images/bryen_0.png"
        altText="Titulo do post"
      />
      <PostSummary
        postHeading="h1"
        postLink={postLink}
        createdAt={"2025-04-08T00:33:56.907Z"}
        title={"Rotina matinal de pessoas altamente eficazes"}
        excerpt={
          "O Next.js também é uma boa escolha para quem quer se preocupar com performance e SEO."
        }
      />
    </section>
  );
}
