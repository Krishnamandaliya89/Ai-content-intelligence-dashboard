import { Loader2 } from "lucide-react";
import { cn } from "@/utils/cn";

export function LoadingState({ className }: { className?: string }) {
  return (
    <div className={cn("flex min-h-[300px] items-center justify-center", className)}>
      <Loader2 className="h-8 w-8 animate-spin text-blue-500" />
    </div>
  );
}
