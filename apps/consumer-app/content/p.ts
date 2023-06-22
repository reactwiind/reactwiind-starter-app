import type { ContentProp, ButtonProps } from "reactwiind";

const button = {
  children: "Get Started!",
  onClick: () => window.open("https://docs.reactwiind.com", "_blank"),
};

const hero: { content: Array<ContentProp>; button: ButtonProps } = {
  content: [
    {
      variant: "h4",
      children: "Reactwiind Starter Webapp",
      color: "text-white",
    },
    {
      highlights: [
        {
          highlight: "development",
          typography: { variant: "display3", color: "text-white" },
        },
        {
          highlight: "starter",
          typography: { variant: "display3", color: "text-white" },
        },
      ],
      variant: "display3",
      color: "text-secondary",
      children: "Kickstart development with reactwiind starter webapp",
    },
    {
      variant: "paragraph",
      as: "span",
      fontSize: "text-lg",
      children:
        "Reactwind UI component library is simple, extensive, powerful that can be used to build web apps at a faster speed. Start developing your web apps with reactwiind's strong, simplified and easy to learn UI components.",
      color: "text-white",
    },
  ],
  button: {
    variant: "contained",
    color: "secondary",
    size: "lg",
    ...button,
  },
};

/**
 * Main props export.
 */
export const p = {
  home: {
    hero,
  },
};
