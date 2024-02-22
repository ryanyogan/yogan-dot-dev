import { LoaderFunctionArgs, MetaFunction, json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
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
        className="space-y-8 max-w-md"
      >
        <motion.div variants={textVariants}>
          <h2 className="text-2xl sm:text-4xl font-bold">
            Incredible Thoughts 🤯{" "}
          </h2>
          <p className="text-gray-600 font-light">
            Recent thoughts by this spectacular brain.
          </p>
        </motion.div>

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

      <div className="max-w-md order-first lg:order-last">
        <h2 className="text-slate-900 text-3xl font-bold">
          Hi, 👋 I&apos;m Ryan
        </h2>

        <div className="text-gray-600 space-y-4 mt-4">
          <p>
            As an Engineering Leader and Software Developer. I&apos;m passionate
            about crafting exceptional user experiences, developing rock-solid
            distributed services, and nurturing a dynamic 🤝 team development.
          </p>
          <p>
            My leadership style is rooted in empathy, curiosity, and
            cheerleading. I believe in the power of a growth mindset, and I
            strive to create an environemnt where everyone may learn, thrive,
            and have 🎉 fun.
          </p>
          <p>
            My engineering approach is that of a Technical Generalist,
            recognizing the unique value each technology brings to the table. My
            mission is to build and teach, leveraging my broad skill set to
            innovate and 💡 inspire.
          </p>

          <div>
            <Link to="/" prefetch="intent" className="text-slate-600 underline">
              Check out my book-shelf
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
