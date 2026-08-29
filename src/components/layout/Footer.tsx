import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="w-full border-t border-zinc-200 dark:border-zinc-800">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-center px-6">
        <p className="text-sm text-zinc-500">
          &copy; {new Date().getFullYear()} {site.brandName} &mdash;{" "}
          {site.title}
        </p>
      </div>
    </footer>
  );
}
