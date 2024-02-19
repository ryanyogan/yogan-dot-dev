import { Resvg } from "@resvg/resvg-js";
import satori, { SatoriOptions } from "satori";

/**
 * Fetches the Inter-Black font from the specified base URL.
 * @param baseUrl The base URL to fetch the font from.
 * @returns A promise that resolves to an array buffer containing the font data.
 */
async function fontSans(baseUrl: string) {
  const response = await fetch(new URL(`${baseUrl}/fonts/Inter-Black.ttf`));
  return await response.arrayBuffer();
}

const OG_IMAGE_WIDTH = 1200;
const OG_IMAGE_HEIGHT = 630;

export async function createOGImage(title: string, requestUrl: string) {
  const fontSansData = await fontSans(requestUrl);
  const options: SatoriOptions = {
    width: OG_IMAGE_WIDTH,
    height: OG_IMAGE_HEIGHT,
    fonts: [
      {
        name: "Inter",
        data: fontSansData,
        style: "normal",
      },
    ],
  };

  const svg = await satori(
    <div
      style={{
        width: options.width,
        height: options.height,
        background: "linear-gradient( 135deg, #eaeaea 10%, #fff 100%)",
        color: "black",
        fontFamily: "Inter",
        fontSize: "100",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div>{title}</div>
    </div>,
    options
  );

  const resvg = new Resvg(svg);
  const pngData = resvg.render();
  return pngData.asPng();
}
