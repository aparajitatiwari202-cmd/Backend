import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const [rows] = await db.query("SELECT 1");
    return NextResponse.json(
      { message: "Database connected successfully", rows },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Database connection failed" },
      { status: 500 }
    );
  }
}

