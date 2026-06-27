import { PostList } from "@/components/PostList";
import { SpinLoader } from "@/components/SpinLoader";
import clsx from "clsx";
import Image from "next/image";
import { Suspense } from "react";

export default function HomePage() {
  return (
    <div>
      <header>
        <h1 className="text-6x1 font-bold text-center py-8">
          Welcome to my blog
        </h1>
      </header>

      <Suspense fallback={<SpinLoader />}>
        <PostList />
      </Suspense>

      <footer>
        <p className="text-6x1 font-bold text-center py-8">
          Footer for my blog
        </p>
      </footer>
    </div>
  );
}
