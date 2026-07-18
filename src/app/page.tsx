import { Container } from "@/components/Container";
import Header from "@/components/Header";
import { PostCoverImage } from "@/components/PostCoverImage";
import { PostFeatured } from "@/components/PostFeatured";
import { PostHeading } from "@/components/PostHeading";
import { PostList } from "@/components/PostList";
import { SpinLoader } from "@/components/SpinLoader";
import clsx from "clsx";
import { Suspense } from "react";

export default function HomePage() {
  return (
    <>
      <Suspense fallback={<SpinLoader className="min-h-20 mb-16" />}>
        <PostFeatured />
        <PostList />
      </Suspense>
    </>
  );
}
