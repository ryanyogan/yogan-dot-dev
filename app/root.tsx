import {
  Links,
  LiveReload,
  Meta,
  MetaFunction,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { ReactNode } from "react";

import { SiDiscord, SiGithub, SiLinkedin, SiTwitter } from "react-icons/si";
import socialLinks from "~/constants/social-links.json";
import "~/tailwind.css";
import { Header } from "./components/header";

const Layout = (props: { children: ReactNode }) => (
  <div className="min-h-screen flex flex-col">
    <Header />

    <main className="w-full max-w-7xl mx-auto flex-1 flex">
      {props.children}
    </main>

    <footer className="w-full text-slate-500 max-w-7xl mx-auto flex gap-x-2 justify-center">
      <a
        href={socialLinks.linkedin}
        target="_blank"
        rel="noreferrer"
        className="inline-block p-5 hover:text-slate-800"
      >
        <SiLinkedin />
      </a>
      <a
        href={socialLinks.twitter}
        target="_blank"
        rel="noreferrer"
        className="inline-block p-5 hover:text-gray-800"
      >
        <SiTwitter />
      </a>
      <a
        href={socialLinks.github}
        target="_blank"
        rel="noreferrer"
        className="inline-block p-5 hover:text-gray-800"
      >
        <SiGithub />
      </a>
      <a
        href={socialLinks.discord}
        target="_blank"
        rel="noreferrer"
        className="inline-block p-5 hover:text-gray-800"
      >
        <SiDiscord />
      </a>
    </footer>
  </div>
);

export const meta: MetaFunction = () => [
  { title: "Ryan Yogan - Incredible Thoughts" },
  {
    name: "description",
    content:
      "I am an engineering leader, software developer, aviation nerd, and lover of all in the ice-rink.",
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
