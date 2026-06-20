import { Activity } from "lucide-react";
import Link from "next/link";
import { APP_ROUTES } from "@/constants/routes";

export function AppLogo() {
  return (
    <Link href={APP_ROUTES.HOME} className="flex items-center gap-2 font-bold tracking-tight">
      <div className="flex h-8 w-8 items-center justify-center rounded-md bg-blue-600 text-white">
        <Activity className="h-5 w-5" />
      </div>
      <span className="hidden text-xl sm:inline-block">AI Content</span>
    </Link>
  );
}
