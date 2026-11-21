import { NextResponse } from "next/server";

export async function GET() {
  try {
    const apiUrl = process.env.BACKEND_URL;

    if (!apiUrl) {
      throw new Error("Missing NEXT_PUBLIC_API_URL environment variable");
    }

    const res = await fetch(`${apiUrl}/colors`);

    if (!res.ok) {
      return NextResponse.json({ message: "" }, { status: res.status });
    }

    const { colors } = await res.json();

    return NextResponse.json({ colors });
  } catch (error) {
    console.error("Database Error:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
