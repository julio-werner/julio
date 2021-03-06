import { chakra } from "@chakra-ui/system";
import NextImage from "next/image";

export const Image = chakra(NextImage, {
  shouldForwardProp: (prop) =>
    [
      "width",
      "height",
      "src",
      "alt",
      "quality",
      "placeholder",
      "blurDataURL",
      "loader",
    ].includes(prop),
});
