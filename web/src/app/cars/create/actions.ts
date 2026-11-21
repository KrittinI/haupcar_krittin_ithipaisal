"use server";

import { redirect } from "next/navigation";

export async function createCar(formData: FormData) {
  const brand = formData.get("brand");
  const model = formData.get("model");
  const color = formData.get("color");
  const plateNo = formData.get("plate_no");
  const chassisNo = formData.get("chassis_no");
  const note = formData.get("note");

  // ส่งข้อมูลไป NestJS API
  const res = await fetch(`${process.env.API_URL}/api/cars`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      brand,
      model,
      color,
      plate_no: plateNo,
      chassis_no: chassisNo,
      note,
    }),
  });

  if (!res.ok) {
    throw new Error("Failed to create car");
  }

  redirect("/");
}
