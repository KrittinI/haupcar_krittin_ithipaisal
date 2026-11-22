import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: RouteContext<"/api/cars/[carId]">
) {
  try {
    const { carId } = await params;
    const apiUrl = process.env.BACKEND_URL;

    if (!apiUrl) {
      throw new Error("Missing NEXT_PUBLIC_API_URL environment variable");
    }

    const res = await fetch(`${apiUrl}/cars/${carId}`);

    if (!res.ok) {
      const error = await res.json();
      return NextResponse.json(
        { message: error.message },
        { status: res.status }
      );
    }
    const data = await res.json();

    return NextResponse.json({ car: data.car });
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
}

export async function PUT(
  request: NextRequest,
  { params }: RouteContext<"/api/cars/[carId]">
) {
  try {
    const { carId } = await params;
    const apiUrl = process.env.BACKEND_URL;

    if (!apiUrl) {
      throw new Error("Missing NEXT_PUBLIC_API_URL environment variable");
    }

    const body = await request.json();

    const res = await fetch(`${apiUrl}/cars/${carId}`, {
      body: JSON.stringify(body),
      method: "PUT",
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

export async function DELETE(
  request: NextRequest,
  { params }: RouteContext<"/api/cars/[carId]">
) {
  try {
    const { carId } = await params;
    const apiUrl = process.env.BACKEND_URL;

    if (!apiUrl) {
      throw new Error("Missing NEXT_PUBLIC_API_URL environment variable");
    }

    const res = await fetch(`${apiUrl}/cars/${carId}`, {
      method: "DELETE",
    });

    if (!res.ok) {
      const error = await res.json();

      return NextResponse.json(
        { message: error.message },
        { status: res.status }
      );
    }

    return new NextResponse(null, { status: 204 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: error }, { status: 500 });
  }
}
