import { User } from "lucide-react";

export function UserAvatar() {
  return (
    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-200 dark:bg-gray-800">
      <User className="h-5 w-5 text-gray-500 dark:text-gray-400" />
    </div>
  );
}
