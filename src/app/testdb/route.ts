import { NextResponse } from "next/server"
import db from "../../lib/db"


export async function GET() {
  try {
    const [rows] = await db.query("SELECT 1 AS connected")
    return NextResponse.json({
      success: true,
      message: "MySQL connected successfully",
      rows,
    })
  } catch (error: any) {
    return NextResponse.json(
      {
        success: false,
        message: "MySQL NOT connected",
        error: error.message,
      },
      { status: 500 }
    )
  }
}



