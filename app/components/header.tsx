import { Link } from "@remix-run/react";
import { SiRevoltdotchat } from "react-icons/si";
import { Nav } from "./nav";

export function Header() {
  return (
    <header className="mx-auto flex w-full max-w-7xl flex-wrap items-center justify-between border-b border-gray-100 bg-background p-[2em] font-sans font-bold text-text-primary backdrop-blur-[100px] dark:border-gray-800 dark:bg-d-background dark:text-d-text-primary">
      <Link to="/" prefetch="intent" className="text-4xl mr-16">
        <SiRevoltdotchat className="text-slate-800 hover:text-slate-500" />
      </Link>
      <Nav />
    </header>
  );
}
