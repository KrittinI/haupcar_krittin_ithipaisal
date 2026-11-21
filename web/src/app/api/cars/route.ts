import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const apiUrl = process.env.BACKEND_URL;
    const searchParams = request.nextUrl.searchParams;

    if (!apiUrl) {
      throw new Error("Missing NEXT_PUBLIC_API_URL environment variable");
    }

    const res = await fetch(`${apiUrl}/cars?${searchParams.toString()}`);

    if (!res.ok) {
      return NextResponse.json({ message: "" }, { status: res.status });
    }

    const data = await res.json();

    return NextResponse.json({ cars: data.cars, total: data.cars.length });
  } catch (error) {
    console.error("Database Error:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
