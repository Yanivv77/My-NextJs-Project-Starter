"use client";

import { ReactNode } from "react";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <SessionProvider>
      <NextThemesProvider attribute="class" defaultTheme="system" enableSystem>
        <div className="flex h-full w-full flex-col">{children}</div>
      </NextThemesProvider>
    </SessionProvider>
  );
}
