import { NextResponse } from "next/server";

// Basic middleware example. Currently passes everything through.
export function proxy(request) {
  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
