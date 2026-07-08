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
    <Container>
      <Header />

      <PostFeatured />

      <Suspense fallback={<SpinLoader />}>
        <PostList />
      </Suspense>

      <footer>
        <p className="text-6x1 font-bold text-center py-8">
          Footer for my blog
        </p>
      </footer>
    </Container>
  );
}
