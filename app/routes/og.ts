import { LoaderFunctionArgs } from "@remix-run/node";
import { createOGImage } from "~/.server/generate-og-image";

export const OG_IMAGE_WIDTH = 1200;
export const OG_IMAGE_HEIGHT = 630;

export async function loader({ request }: LoaderFunctionArgs) {
  const { origin, searchParams } = new URL(request.url);
  const title = searchParams.get("title") ?? "Hello, World!";

  const png = await createOGImage(title, origin);

  return new Response(png, {
    status: 200,
    headers: {
      "Content-Type": "image/png",
      // "Cache-Control": "public, max-age=3600", TODO: TURN THIS ON IN PRODUCTION!!
    },
  });
}
