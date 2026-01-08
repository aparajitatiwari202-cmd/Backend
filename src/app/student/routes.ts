import pool from "@/lib/db";
import { NextResponse } from "next/server" ;

// GET all students
export async function GET() {
  const [rows] = await pool.query("SELECT * FROM students");
  return NextResponse.json(rows);
}

// POST new student
export async function POST(req: Request) {
  const { name, email, course } = await req.json();

  if (!name || !email || !course) {
    return NextResponse.json(
      { message: "All fields are required" },
      { status: 400 }
    );
  }

  await pool.query(
    "INSERT INTO students (name, email, course) VALUES (?, ?, ?)",
    [name, email, course]
  );

  return NextResponse.json({ message: "Student added successfully" }, { status: 201 });
}

// PUT / UPDATE student
export async function PUT(req: Request) {
  const { id, name, email, course } = await req.json();

  await pool.query(
    "UPDATE students SET name=?, email=?, course=? WHERE id=?",
    [name, email, course, id]
  );

  return NextResponse.json({ message: "Student updated successfully" });
}

// DELETE student
export async function DELETE(req: Request) {
  const { id } = await req.json();

  await pool.query("DELETE FROM students WHERE id=?", [id]);

  return NextResponse.json({ message: "Student deleted successfully" });
}
