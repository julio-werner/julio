import colors from "@/theme/colors";
import components from "@/theme/components";
import { globalStyles } from "@/theme/styles";
import { extendTheme } from "@chakra-ui/react";
import { theme as base, ThemeConfig } from "@chakra-ui/theme";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const fonts = {
  heading: `Inter, ${base.fonts.heading}`,
  body: `Inter, ${base.fonts.body}`,
};

const theme = extendTheme({
  config,
  fonts,
  colors,
  components,
  styles: globalStyles,
  shadows: {
    outline: `0 0 0 1px ${colors.primary[200]}`,
  },
});

export default theme;
