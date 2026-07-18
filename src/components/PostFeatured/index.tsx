import clsx from "clsx";
import { PostCoverImage } from "../PostCoverImage";
import { PostHeading } from "../PostHeading";
import { PostSummary } from "../PostSummary";
import { postRepository } from "@/repositories/post";
import { findAllPublicPostsCached } from "@/lib/post/queries";

export async function PostFeatured() {
  const posts = await findAllPublicPostsCached();
  const post = posts[0];
  const postLink = `/post/${post.slug}`;

  return (
    <section className="grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group">
      <PostCoverImage
        url={postLink}
        src={post.coverImageUrl}
        altText={post.title}
      />
      <PostSummary
        postHeading="h1"
        postLink={postLink}
        createdAt={post.createdAt}
        title={post.title}
        excerpt={post.excerpt}
      />
    </section>
  );
}
