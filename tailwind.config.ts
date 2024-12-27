/** @type {import('tailwindcss').Config} */

import { Config } from "tailwindcss/types/config";

import plugin from "tailwindcss/plugin";

const config: Config = {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    spacing: () => ({
      auto: "auto",
      0: "0",
      px: "1px",
      rem: "calc(var(--layout-spacing-default)*5)",
      xs: "calc(var(--layout-spacing-default)*1)",
      sm: "calc(var(--layout-spacing-default)*2)",
      md: "calc(var(--layout-spacing-default)*4)",
      lg: "calc(var(--layout-spacing-default)*8)",
      xl: "calc(var(--layout-spacing-default)*12)",
      "2xl": "calc(var(--layout-spacing-default)*16)",
      "3xl": "calc(var(--layout-spacing-default)*24)",
      "4xl": "calc(var(--layout-spacing-default)*32)",
      "5xl": "calc(var(--layout-spacing-default)*40)",
      "6xl": "calc(var(--layout-spacing-default)*48)",
      icon: "calc(var(--layout-spacing-default)*6)",
    }),
    colors: ({ colors }) => ({
      background: {
        100: "hsl(var(--color-background-100) / <alpha-value>)",
        200: "hsl(var(--color-background-200) / <alpha-value>)",
        300: "hsl(var(--color-background-300) / <alpha-value>)",
      },
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      transparent: colors.transparent,
      current: colors.current,
    }),
    extend: {
      height: () => ({
        "header-row": "calc(var(--layout-header-row-height))",
      }),
    },
    data: {
      hidden: "is-hidden='true'",
    },
  },
  plugins: [
    // #endregion ----------------------------------------------------------------------------------
    // #region UI
    // -------------------------------------------------------------------------------------------*/
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".no-scrollbar": {
          "scrollbar-width": "none",
        },
      });
    }),
  ],
};

export default config;
