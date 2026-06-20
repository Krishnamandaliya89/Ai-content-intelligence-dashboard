import { Inbox } from "lucide-react";
import { cn } from "@/utils/cn";

export function EmptyState({
  title = "No data found",
  description = "There is nothing to display here at the moment.",
  icon = <Inbox className="mx-auto h-12 w-12 text-gray-400" />,
  action,
  className,
}) {
  return (
    <div className={cn("flex min-h-[400px] flex-col items-center justify-center rounded-lg border border-dashed p-8 text-center", className)}>
      {icon}
      <h3 className="mt-4 text-lg font-semibold">{title}</h3>
      <p className="mb-4 mt-2 text-sm text-gray-500 dark:text-gray-400">{description}</p>
      {action}
    </div>
  );
}
