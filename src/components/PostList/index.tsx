import { postRepository } from "@/repositories/post";
import { PostCoverImage } from "../PostCoverImage";
import { PostHeading } from "../PostHeading";
import clsx from "clsx";

export async function PostList() {
  const posts = await postRepository.findAll();

  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => {
        const postLink = `/post/${post.slug}`;

        return (
          <div className="flex flex-col group gap-4" key={post.id}>
            <PostCoverImage
              url={postLink}
              src={post.coverImageUrl}
              altText={post.title}
            />
            <div className={clsx("flex flex-col gap-4 sm:justify-center")}>
              <time
                className="text-slate-600 text-sm/tight"
                dateTime={post.createdAt}
              >
                {post.createdAt}
              </time>
              <PostHeading url={postLink} as="h2">
                {post.title}
              </PostHeading>
              <p>{post.excerpt}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
