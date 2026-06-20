"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, TrendingUp, Star, BarChart2, Settings } from "lucide-react";
import { APP_ROUTES } from "@/constants/routes";
import { cn } from "@/utils/cn";

const navItems = [
  { href: APP_ROUTES.HOME, label: "Feed", icon: Home },
  { href: APP_ROUTES.TRENDING, label: "Trending", icon: TrendingUp },
  { href: APP_ROUTES.FAVORITES, label: "Favorites", icon: Star },
  { href: APP_ROUTES.ANALYTICS, label: "Analytics", icon: BarChart2 },
  { href: APP_ROUTES.SETTINGS, label: "Settings", icon: Settings },
];

export function AppSidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden w-64 flex-col border-r bg-white dark:border-gray-800 dark:bg-gray-950 md:flex">
      <nav className="flex-1 space-y-1 p-4">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                isActive
                  ? "bg-blue-50 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300"
                  : "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
              )}
            >
              <item.icon className="h-5 w-5" />
              {item.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
