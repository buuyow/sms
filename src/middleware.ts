
import { auth } from "@/lib/auth";

export default auth((req) => {
  if (
    !req.auth &&
    req.nextUrl.pathname !== "/auth/login" &&
    req.nextUrl.pathname !== "/auth/signup" && req.nextUrl.pathname !== "/"
  ) {
    const newUrl = new URL("/auth/login", req.nextUrl.origin);
    return Response.redirect(newUrl);
  }
});

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};