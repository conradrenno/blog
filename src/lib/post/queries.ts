import { postRepository } from "@/repositories/post";
import { notFound } from "next/navigation";
import { cache } from "react";

export const findAllPublicPostsCached = cache(
  async () => await postRepository.findAllPublic(),
);

export const findBySlugCached = cache(async (slug: string) => {
  const post = await postRepository.findBySlug(slug).catch(() => undefined);

  if (!post) {
    return notFound();
  }

  return post;
});

export const findByIdCached = cache(
  async (id: string) => await postRepository.findById(id),
);
