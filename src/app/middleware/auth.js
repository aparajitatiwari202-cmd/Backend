import { NextResponse } from "next/server";
import { verifyToken } from "@/lib/jwt";

export function middleware(req) {
  const authHeader = req.headers.get("authorization");

  if (!authHeader) {
    return NextResponse.json(
      { message: "Unauthorized" },
      { status: 401 }
    );
  }

  try {
    const token = authHeader.split(" ")[1];
    const user = verifyToken(token);

    req.user = user;
    return NextResponse.next();
  } catch (error) {
    return NextResponse.json(
      { message: "Invalid token" },
      { status: 401 }
    );
  }
}

export const config = {
  matcher: [
    "/api/achievement/:path*",
    "/api/student/:path*",
  ],
};

