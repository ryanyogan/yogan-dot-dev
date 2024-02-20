import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import { motion } from "framer-motion";
import { getPosts } from "~/.server/posts";
import { Post } from "~/components/post";
import { containerVariants, textVariants } from "~/utils/animation-config";

export const loader = async () => json(await getPosts());

export default function Component() {
  const posts = useLoaderData<typeof loader>();

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="p-10"
    >
      <ul className="space-y-8">
        <div>
          <h2 className="text-2xl sm:text-4xl font-bold">
            Incredible 🤯 Thoughts
          </h2>
          <p className="text-gray-600 font-light">
            Powered by this spectacular brain.
          </p>
        </div>

        <hr />

        <motion.div variants={textVariants}>
          {posts.map((post) => (
            <li key={post.slug} className="pb-10">
              <Post {...post} />
            </li>
          ))}
        </motion.div>
      </ul>
    </motion.div>
  );
}
