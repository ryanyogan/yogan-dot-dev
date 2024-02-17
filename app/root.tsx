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

import "~/tailwind.css";
import { Header } from "./components/header";

const Layout = (props: { children: ReactNode }) => (
  <div className="min-h-screen flex flex-col">
    <Header />
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
