import type { MetaFunction, LinksFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  Link,
} from "@remix-run/react";
import { useWindowScroll, useWindowSize } from "react-use";

import styles from "./tailwind.css";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1",
});

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: styles },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Rubik+Marker+Hatch&display=swap",
  },
];

const nav_links = [
  {
    to: "/",
    className: "hover:text-indigo-500 text-xl",
    text: "What would you like to do ?",
  },
  {
    to: "/",
    className: "hover:text-indigo-500 text-xl",
    text: "FAQs",
  },
  {
    to: "/",
    className: "hover:text-indigo-500 text-xl",
    text: "About",
  },
  {
    to: "/login",
    className: "font-bold bg-indigo-600 hover:bg-transparent rounded-2xl ",
    text: "Sign in",
  },
  {
    to: "/join",
    className: "font-bold bg-indigo-600 hover:bg-transparent  rounded-2xl",
    text: "Sign up",
  },
];

export default function App() {
  const scroll_values = useWindowScroll();
  const x = useWindowSize();
  const should_show_black_text = scroll_values.y > x.height;

  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <div className="bg-transparent flex justify-between fixed top-0 left-0 right-0">
          <div>
            <Link to="/">
              <div
                className={`text-white text-xl font-bold font-mono ml-2 ${
                  should_show_black_text ? "text-black" : "text-white"
                }`}
              >
                my stories
                <br />
                matter
              </div>
            </Link>
          </div>
          <div className="">
            <div className="mt-2 mr-2 flex gap-3 ">
              {nav_links.map((link, i) => (
                <Link
                  key={i}
                  to={link.to}
                  className={`font-semibold ${
                    link.className
                  } py-3 px-4  transition-all duration-500 hover:underline ${
                    should_show_black_text ? "text-black" : "text-white"
                  }`}
                >
                  {link.text}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
