import pool from "@/lib/db";
import { NextResponse } from "next/server";

// GET all users/teacher
export async function GET() {
  const [rows] = await pool.query("SELECT * FROM teacher");
  return NextResponse.json(rows);
}

// POST / register new user
export async function POST(req: Request) {
  const { name, email, teacherId } = await req.json();

  if (!name || !email || !teacherId) {
    return NextResponse.json(
      { message: "All fields are required" },
      { status: 400 }
    );
  }

  await pool.query(
    "INSERT INTO uteacher (name, email, role) VALUES (?, ?, ?)",
    [name, email, role]
  );

  return NextResponse.json({ message: "User added successfully" }, { status: 201 });
}
