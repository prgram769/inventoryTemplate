// import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { updateSession } from "./lib/supabase/proxy";

export async function middleware(request: NextRequest) {
  // return NextResponse.redirect(new URL("/signin", request.url));

  return await updateSession(request);
}

/* TODO Set the path where the middleware must be applied */

export const config = {
  matcher: "/dashboard",
}