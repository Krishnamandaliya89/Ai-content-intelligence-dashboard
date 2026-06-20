import * as React from "react";
import { cn } from "@/utils/cn";

export function PageContainer({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-7xl p-4 md:p-6 lg:p-8", className)}>
      {children}
    </div>
  );
}
