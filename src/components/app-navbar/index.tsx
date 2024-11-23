"use client";

import Link from "next/link";
import { IconPackage } from "@tabler/icons-react";
import { Menu } from "lucide-react";
import { useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import AuthButton from "./auth-button";
import { ThemeSwitcher } from "./theme-switcher";

export default function AppNavbar() {
  const { status } = useSession();

  const menuItems = [];

  if (status === "authenticated") {
    menuItems.push(
      {
        label: "Profile",
        href: "/profile",
      },
      {
        label: "Guestbook",
        href: "/guestbook",
      }
    );
  }

  return (
    <nav className="border-b bg-background">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2">
        <div className="mr-4 flex items-center gap-2">
          <IconPackage />
          <span className="font-bold">Next.js Starter</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden flex-1 flex-row-reverse items-center gap-6 p-4 sm:flex">
          {menuItems.map((item, index) => (
            <Link
              key={`${item}-${index}`}
              href={item.href}
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <ThemeSwitcher />
          <AuthButton />
        </div>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild className="sm:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <nav className="flex flex-col gap-4">
              {menuItems.map((item, index) => (
                <Link
                  key={`${item}-${index}`}
                  href={item.href}
                  className="text-sm font-medium transition-colors hover:text-primary"
                >
                  {item.label}
                </Link>
              ))}
              <ThemeSwitcher showLabel />
              <AuthButton />
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
