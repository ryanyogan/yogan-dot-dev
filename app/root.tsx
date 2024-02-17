import {
  Links,
  LiveReload,
  Meta,
  MetaFunction,
  NavLink,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { ReactNode } from "react";
import { SiRevoltdotchat } from "react-icons/si";

import "~/tailwind.css";

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  isActive ? "border-b-2 border-cyan-700" : "";

const Layout = (props: { children: ReactNode }) => (
  <div className="min-h-screen flex flex-col">
    <header className="w-full max-w-7xl mx-auto p-10 border-b border-gray-100">
      <nav className="flex flex-row items-center">
        <span className="text-4xl mr-16">
          <SiRevoltdotchat className="text-slate-800" />
        </span>
        <ul className="flex gap-16 text-lg font-semibold">
          <li>
            <NavLink to="/" className={navLinkClass}>
              home
            </NavLink>
          </li>
          <li>
            <NavLink to="/blog" className={navLinkClass}>
              blog
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={navLinkClass}>
              about
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
    <main className="w-full max-w-7xl mx-auto flex-1 flex">
      {props.children}
    </main>
    <footer className="w-full max-w-7xl mx-auto p-10 flex justify-center">
      <span className="text-sm text-gray-500">
        a nerdier version of{" "}
        <a href="https://ryanyogan.com" target="_blank" rel="noreferrer">
          ryanyogan.com
        </a>{" "}
      </span>
    </footer>
  </div>
);

export const meta: MetaFunction = () => [
  { title: "Incredible Thoughts" },
  {
    name: "description",
    content: "Incredible Thoughts",
  },
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Layout>
          <Outlet />
        </Layout>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
