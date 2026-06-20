import { AlertCircle } from "lucide-react";
import { cn } from "@/utils/cn";
import { Button } from "../ui/button";

export function ErrorState({
  title = "Something went wrong",
  message = "An error occurred while loading the data.",
  onRetry,
  className,
}) {
  return (
    <div className={cn("flex min-h-[300px] flex-col items-center justify-center rounded-lg border border-red-100 bg-red-50 p-8 text-center dark:border-red-900/30 dark:bg-red-900/10", className)}>
      <AlertCircle className="mx-auto h-10 w-10 text-red-500" />
      <h3 className="mt-4 text-lg font-semibold text-red-900 dark:text-red-400">{title}</h3>
      <p className="mb-4 mt-2 text-sm text-red-700 dark:text-red-300">{message}</p>
      {onRetry && (
        <Button variant="outline" onClick={onRetry}>
          Try Again
        </Button>
      )}
    </div>
  );
}
