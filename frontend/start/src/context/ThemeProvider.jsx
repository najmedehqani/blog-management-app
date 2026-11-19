"use client";

import { ThemeProvider } from "next-themes";

export default function NextThemeProvider({ children }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem={false}
      value={{
        dark: "dark-mode",
        light: "light-mode",
      }}
      forcedTheme={undefined}
    >
      {children}
    </ThemeProvider>
  );
}
