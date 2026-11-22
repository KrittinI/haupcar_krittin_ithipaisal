import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ brand: string }> }
) {
  try {
    const { brand } = await params;
    const apiUrl = process.env.BACKEND_URL;

    if (!apiUrl) {
      throw new Error("Missing NEXT_PUBLIC_API_URL environment variable");
    }

    const res = await fetch(`${apiUrl}/models/${brand}`);

    if (!res.ok) {
      return NextResponse.json({ message: "" }, { status: res.status });
    }

    const { models } = await res.json();

    return NextResponse.json({ models });
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
}
