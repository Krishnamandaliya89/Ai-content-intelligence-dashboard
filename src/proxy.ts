import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Basic middleware example. Currently passes everything through.
export function proxy(request: NextRequest) {
  // TODO: Add auth or locale checks if needed
  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
