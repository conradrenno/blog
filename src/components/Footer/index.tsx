import Link from "next/link";

export function Footer() {
  return (
    <footer className="py-8">
      <p className="text-6x1 font-bold text-center py-8">
        <span>Copyright &copy; {new Date().getFullYear()} - </span>{" "}
        <Link href="/">The Blog</Link>. All rights reserved.
      </p>
    </footer>
  );
}
