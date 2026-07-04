import clsx from "clsx";

export default function Header() {
  return (
    <header>
      <h1
        className={clsx(
          "text-4xl font-extrabold py-8",
          "sm:text-5xl sm:py-10",
          "md:text-6xl md:py-12",
          "lg:text-7xl lg:py-12",
        )}
      >
        <a href="#">Welcome to my blog</a>
      </h1>
    </header>
  );
}
