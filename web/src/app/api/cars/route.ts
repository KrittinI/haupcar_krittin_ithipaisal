import { NextResponse } from "next/server";

export async function GET() {
  try {
    const apiUrl = process.env.BACKEND_URL;

    console.log({ apiUrl });

    if (!apiUrl) {
      throw new Error("Missing NEXT_PUBLIC_API_URL environment variable");
    }

    const cars = await fetch(`${apiUrl}/cars`);
  } catch (error) {
    console.error("Database Error:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
