import { LoaderFunctionArgs, MetaFunction, json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { motion } from "framer-motion";

import { getPosts } from "~/.server/posts";
import { Post } from "~/components/post";
import { containerVariants, textVariants } from "~/utils/animation-config";
import { OG_IMAGE_HEIGHT, OG_IMAGE_WIDTH } from "./og";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const posts = await getPosts();
  const { origin } = new URL(request.url);
  const ogImageUrl = `${origin}/og?title=Incredible%20🤯%20Thoughts`;

  return json({
    featuredPosts: posts.filter((post) => post.frontmatter.featured),
    ogImageUrl,
  });
};

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  const ogImageUrl = data?.ogImageUrl;

  return [
    {
      title: "Incredible Thoughts",
      "twitter:card": "summary_large_image",
      "twitter:title": "Incredible Thoughts",
      "og:title": "Incredible Thoughts",
      "og:image:width": String(OG_IMAGE_WIDTH),
      "og:image:height": String(OG_IMAGE_HEIGHT),
      "og:image": ogImageUrl,
    },
  ];
};

export default function Index() {
  const { featuredPosts } = useLoaderData<typeof loader>();

  return (
    <div className="flex-1 p-10 grid grid-cols-1 lg:grid-cols-2 gap-16 sm:place-items-center">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="space-y-8"
      >
        <div>
          <h2 className="text-2xl sm:text-4xl font-bold">
            Incredible Thoughts 🤯{" "}
          </h2>
          <p className="text-gray-600 font-light">
            Recent thoughts by this spectacular brain.
          </p>
        </div>

        <hr />

        <motion.section variants={textVariants}>
          <ul className="mt-4 space-y-8">
            {featuredPosts.map((post) => (
              <li key={post.slug}>
                <Post {...post} />
              </li>
            ))}
          </ul>
        </motion.section>
      </motion.div>

      <motion.div
        variants={textVariants}
        initial="hidden"
        animate="visible"
        className="max-w-md"
      >
        <h2 className="text-slate-900 text-2xl font-bold">
          Hi, 👋 I&apos;m Ryan
        </h2>
        <p className="text-gray-900 font-light mb-2"></p>

        <div className="text-gray-900 space-y-4">
          <p>
            I&apos;m a silly nerd Engineering Leader, Software Developer, and
            Aviation Nerd who loves to build & teach all-the-things. A beautiful
            user-experience, rock-solid services, and a kick-ass group of
            individuals is my jam.
          </p>
          <p>
            When it comes to the technicals, I have enjoyed the sub-title of
            Generalist. I see value in Rails, Django, Go, Elixir, Node, .NET,
            Swift, React, Svelte, why yes; SQL and BASH!. Rust is on-going, hah.
          </p>
          <p>
            I love it all, I see value in the proper tool for the job these
            days. Moons ago, yeah, I would have bike-shedded with you on `let vs
            const` 🤷
          </p>
        </div>
      </motion.div>
    </div>
  );
}
