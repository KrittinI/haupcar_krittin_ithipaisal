import { NextResponse } from "next/server";

export async function GET() {
  try {
    const apiUrl = process.env.BACKEND_URL;

    if (!apiUrl) {
      throw new Error("Missing NEXT_PUBLIC_API_URL environment variable");
    }

    const res = await fetch(`${apiUrl}/models`);

    if (!res.ok) {
      return NextResponse.json({ message: "" }, { status: res.status });
    }

    const { models } = await res.json();

    return NextResponse.json({ models });
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
}
