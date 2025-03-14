import type { Preview } from "@storybook/react";
import "../src/index.css";

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: "lightSteelBlue",
      values: [
        {
          name: "lightSteelBlue",
          value: "#b0c4de",
        },
      ],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
