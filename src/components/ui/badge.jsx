import * as React from "react";
import { cn } from "@/utils/cn";

export function Badge({ className, variant = "default", ...props }) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
        {
          "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300": variant === "default",
          "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300": variant === "secondary",
          "text-foreground border": variant === "outline",
        },
        className
      )}
      {...props}
    />
  );
}
