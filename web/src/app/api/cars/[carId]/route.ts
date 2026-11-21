import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: PageProps<"/cars/[carId]">
) {
  try {
    const { carId } = await params;
    const apiUrl = process.env.BACKEND_URL;

    if (!apiUrl) {
      throw new Error("Missing NEXT_PUBLIC_API_URL environment variable");
    }

    const res = await fetch(`${apiUrl}/cars/${carId}`);

    if (!res.ok) {
      return NextResponse.json({ message: "" }, { status: res.status });
    }

    const data = await res.json();

    return NextResponse.json({ car: data.car });
  } catch (error) {
    console.error("Database Error:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
