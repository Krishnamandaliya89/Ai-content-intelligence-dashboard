"use client";

import { AppLogo } from "../common/app-logo";
import { UserAvatar } from "../common/user-avatar";
import { ThemeToggle } from "../settings/theme-toggle";
import { MobileNav } from "./mobile-nav";
import { Button } from "../ui/button";

export function AppHeader() {
  return (
    <header className="sticky top-0 z-40 flex h-16 w-full items-center justify-between border-b bg-white/80 px-4 backdrop-blur-md dark:border-gray-800 dark:bg-gray-950/80">
      <div className="flex items-center gap-4">
        <MobileNav />
        <AppLogo />
      </div>
      <div className="flex items-center gap-4">
        {/* Search placeholder */}
        <div className="hidden md:block">
          <Button variant="outline" size="sm" className="text-gray-500 w-64 justify-start">
            Search content...
          </Button>
        </div>
        <ThemeToggle />
        <UserAvatar />
      </div>
    </header>
  );
}
