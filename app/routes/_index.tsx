import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { motion } from "framer-motion";

import { getPosts } from "~/.server/posts";
import { Post } from "~/components/post";
import { containerVariants, textVariants } from "~/utils/animation-config";

export const loader = async () => {
  const posts = await getPosts();
  return json(posts.filter((post) => post.frontmatter.featured));
};

export default function Index() {
  const featuredPosts = useLoaderData<typeof loader>();

  return (
    <div className="flex-1 p-10 grid grid-cols-1 lg:grid-cols-2 gap-16 sm:place-items-center">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="space-y-8"
      >
        <div>
          <h2 className="text-4xl font-bold">Incredible 🤯 Thoughts</h2>
          <p className="text-gray-600 font-light">
            Powered by this spectacular brain.
          </p>
        </div>

        <hr />

        <motion.section variants={textVariants}>
          <h3 className="text-slate-600 font-light">✨ I like these ones ✨</h3>
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
        className="bg-gradient-to-t max-w-xl from-transparent to-slate-100 shadow-sm p-8 rounded-xl"
      >
        <h2 className="text-slate-800 text-lg font-bold mb-2">
          Hi, I&apos;m Ryan 👋
        </h2>

        <div className="font-light text-black space-y-4">
          <p>
            I am a silly nerd who loves to build all-the-things. A beautiful
            user-experience, rock-solid services, and a kick-ass group of people
            make me happy at work :)
          </p>
          <p>
            When it comes to the technicals, I have enjoyed the sub-title of
            Generalist. I see value in Rails, Django, Go, Elixir, Node, .NET,
            Swift, React, Svelte, why yes; SQL and BASH!, bye-the-way; I use vim
            🤣
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
