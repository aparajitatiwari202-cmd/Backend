import db from "@/lib/db";
import { NextResponse } from "next/server";
import { verifyToken } from "@/lib/jwt";

export async function PATCH(req) {
  try {
    const authHeader = req.headers.get("authorization");
    const token = authHeader.split(" ")[1];
    const user = verifyToken(token);

    if (user.role !== "admin") {
      return NextResponse.json(
        { message: "Access denied" },
        { status: 403 }
      );
    }

    const { achievement_id, verified } = await req.json();

    await db.query(
      "UPDATE achievements SET verified = ? WHERE id = ?",
      [verified, achievement_id]
    );

    return NextResponse.json(
      { message: "Achievement verified" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Authorization error" },
      { status: 401 }
    );
  }
}
