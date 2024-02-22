import { Link } from "@remix-run/react";
import { SiRevoltdotchat } from "react-icons/si";
import { Nav } from "./nav";

export function Header() {
  return (
    <header className="bg-background text-text-primary dark:bg-d-background dark:text-d-text-primary mx-auto flex w-full max-w-7xl flex-wrap items-center justify-between border-b border-gray-100 p-[2em] font-sans font-bold backdrop-blur-[100px] dark:border-gray-800">
      <Link to="/" prefetch="intent" className="mr-16 text-4xl">
        <SiRevoltdotchat className="text-slate-800 hover:text-slate-500" />
      </Link>
      <Nav />
    </header>
  );
}
