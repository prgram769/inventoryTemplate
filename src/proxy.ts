// import { NextResponse } from "next/server";
import { type NextRequest } from "next/server";
import { updateSession } from "./lib/supabase/proxy";

export async function proxy(request: NextRequest) {
  // return NextResponse.redirect(new URL("/signin", request.url));

  return await updateSession(request);
  // const hasSession = await checkIf

  // if (condition) {
    
  // }
}

/* TODO Set the path where the middleware must be applied */

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)'],
}