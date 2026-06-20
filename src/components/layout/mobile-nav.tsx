"use client";

import { useState } from "react";
import { Menu, Home, TrendingUp, Star, BarChart2, Settings } from "lucide-react";
import { Button } from "../ui/button";
import { Modal } from "../ui/modal";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { APP_ROUTES } from "@/constants/routes";
import { cn } from "@/utils/cn";

const navItems = [
  { href: APP_ROUTES.HOME, label: "Feed", icon: Home },
  { href: APP_ROUTES.TRENDING, label: "Trending", icon: TrendingUp },
  { href: APP_ROUTES.FAVORITES, label: "Favorites", icon: Star },
  { href: APP_ROUTES.ANALYTICS, label: "Analytics", icon: BarChart2 },
  { href: APP_ROUTES.SETTINGS, label: "Settings", icon: Settings },
];

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="md:hidden">
      <Button variant="ghost" size="icon" onClick={() => setIsOpen(true)}>
        <Menu className="h-6 w-6" />
      </Button>
      
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Navigation">
        <div className="flex flex-col space-y-2 pt-4">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
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
        </div>
      </Modal>
    </div>
  );
}
