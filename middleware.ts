import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { JWT, getToken } from "next-auth/jwt"
const protectedRoutes = ["/dashboard"];
const publicRoutes = ["/register", "/"];
export async function middleware(request: NextRequest) {
  const token = await getToken({ req: request })
  if (protectedRoutes.includes(request.nextUrl.pathname)) {
    if (!token || isTokenExpired(token)) {
      const response = NextResponse.redirect(new URL("/", request.url)); // modify this later
      return response;
    }
    
  }

}


const isTokenExpired = (token: JWT) => {
  const currentTime = Math.floor(Date.now() / 1000); // Convert to seconds
  return currentTime > (token.exp as number) ;
}