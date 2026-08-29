import { site } from "@/data/site";

export default function Header() {
  return (
    <header className="w-full border-b border-zinc-200 dark:border-zinc-800">
      <div className="mx-auto flex h-16 max-w-6xl items-center px-6">
        <span className="text-lg font-semibold tracking-tight">
          {site.brandName}
        </span>
      </div>
    </header>
  );
}
