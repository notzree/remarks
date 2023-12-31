import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const protectedRoutes = ["/dashboard"];
const publicRoutes = ["/register", "/"];
export function middleware(request: NextRequest) {
  var temp = request.cookies.get("currentUser")?.value;
    const currentUser = temp?.substring(1, temp.length-1) ;
  if (
    protectedRoutes.includes(request.nextUrl.pathname) &&
    (!currentUser ||Date.now()/1000 > parseInt(JSON.parse(currentUser as string).exp) )) {
       //since Date.Now gives in ms, exp is in sec
    request.cookies.delete("currentUser");
    const response = NextResponse.redirect(new URL("/", request.url));
    response.cookies.delete("currentUser");

    return response;
  }
}