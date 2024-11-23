"use client";

import { useEffect, useState } from "react";
import { IconMoon, IconSun } from "@tabler/icons-react";
import useSystemTheme from "@/hooks/use-system-theme";

export function ThemeSwitcher({ showLabel }: { showLabel?: boolean }) {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useSystemTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="inline-flex items-center gap-2 rounded-full bg-secondary p-2 hover:bg-secondary/80"
    >
      {theme === "dark" ? (
        <IconMoon className="h-5 w-5" />
      ) : (
        <IconSun className="h-5 w-5" />
      )}
      {showLabel && <span>Theme</span>}
    </button>
  );
}
