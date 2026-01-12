import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const [rows] = await db.query("SELECT 1 AS connected");

    return NextResponse.json(
      {
        success: true,
        message: "MySQL connected",
        rows,
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("DB ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: "MySQL NOT connected",
        error: error.message,
      },
      { status: 500 }
    );
  }
}


