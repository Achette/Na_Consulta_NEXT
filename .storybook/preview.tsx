import type { Preview } from "@storybook/react";
import { themes } from "@storybook/theming"
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "../src/styles/theme/default"
import { GlobalStyle } from '../src/styles/global';
import React from "react";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    docs: {
      theme: themes.dark
    }
  },
};

export const decorators = [
  (Story) => (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      {Story()}
    </ThemeProvider>
  )
]

export default preview;
