import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const config = defineConfig({
  globalCss: {
    html: {
      colorPalette: "blue",
      bg: "#E0F0FB",
    },
  },
});

export const system = createSystem(defaultConfig, config);
