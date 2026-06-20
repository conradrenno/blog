import clsx from "clsx";
import Image from "next/image";

export default function HomePage() {
  return (
    <div>
      <h1
        className={clsx(
          "text-xl font-bold text-gray-800 hover:text-blue-500 transition-colors duration-300 cursor-pointer mb-4",
        )}
      >
        Hello World
      </h1>
    </div>
  );
}
