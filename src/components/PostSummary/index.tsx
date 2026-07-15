import { formatDateTime, formatDistanceToNow } from "@/utils/format-datetime";
import { PostHeading } from "../PostHeading";
import clsx from "clsx";

type postSummaryProps = {
  postHeading: "h1" | "h2";
  postLink: string;
  createdAt: string;
  title: string;
  excerpt: string;
};

export function PostSummary({
  postHeading,
  postLink,
  createdAt,
  title,
  excerpt,
}: postSummaryProps) {
  return (
    <div className={clsx("flex flex-col gap-4 sm:justify-center")}>
      <time
        className="text-slate-600 text-sm/tight"
        dateTime={formatDistanceToNow(createdAt)}
      >
        {formatDateTime(createdAt)}
      </time>
      <PostHeading url={postLink} as={postHeading}>
        {title}
      </PostHeading>
      <p>{excerpt}</p>
    </div>
  );
}
