import { Container } from "@/components/Container";
import Header from "@/components/Header";
import { PostList } from "@/components/PostList";
import { SpinLoader } from "@/components/SpinLoader";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

export default function HomePage() {
  return (
    <Container>
      <Header />

      <section className="grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group">
        <Link className="h-full w-full overflow-hidden rounded-xl" href="#">
          <Image
            className="h-full w-full object-cover object-center group-hover:scale-105 transition"
            src="/images/bryen_0.png"
            width={1200}
            height={720}
            alt="Titulo do post"
            priority
          />
        </Link>
        <div className={clsx("flex flex-col gap-4 sm:justify-center")}>
          <time className="text-slate-600 text-sm/tight" dateTime="2026-07-03">
            03/07/2026 11:00
          </time>
          <h1 className="text-2xl/tight font-extrabold sm:text-4xl">
            <Link href="#">Titulo do post</Link>
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            euismod, nunc ut Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Sed euismod, nunc ut Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Sed euismod, nunc ut Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Sed euismod, nunc ut
          </p>
        </div>
      </section>

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
