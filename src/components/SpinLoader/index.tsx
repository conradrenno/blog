import clsx from "clsx";

type SpinLoaderProps = {
  className?: string;
};

export function SpinLoader({ className = "" }: SpinLoaderProps) {
  const classes = clsx("flex", "items-center", "justify-center", className);

  return (
    <div className={classes}>
      <div
        className={clsx(
          "animate-spin rounded-full border-5  border-t-transparent border-slate-900",
          "w-10 h-10",
          classes,
        )}
      ></div>
    </div>
  );
}
