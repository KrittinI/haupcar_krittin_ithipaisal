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
      const error = await res.json();
      return NextResponse.json(
        { message: error.message },
        { status: res.status }
      );
    }

    const data = await res.json();

    return NextResponse.json({ cars: data.cars, total: data.cars.length });
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const apiUrl = process.env.BACKEND_URL;

    if (!apiUrl) {
      throw new Error("Missing NEXT_PUBLIC_API_URL environment variable");
    }

    const body = await request.json();

    const res = await fetch(`${apiUrl}/cars`, {
      body: JSON.stringify(body),
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      const error = await res.json();

      return NextResponse.json(
        { message: error.message },
        { status: res.status }
      );
    }

    const { message } = await res.json();

    return NextResponse.json({ message });
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
}
