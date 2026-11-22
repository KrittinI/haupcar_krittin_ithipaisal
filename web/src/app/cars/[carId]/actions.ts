"use server";

import { redirect } from "next/navigation";

export async function updateCar(formData: FormData) {
  const carId = formData.get("id");

  const brand = formData.get("brand");
  const model = formData.get("model");
  const color = formData.get("color");
  const plateNo = formData.get("plate_no");
  const chassisNo = formData.get("chassis_no");
  const note = formData.get("note");

  const res = await fetch(`${process.env.API_URL}/api/cars/${carId}`, {
    method: "PUT",
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
    const error = await res.json();
    throw new Error("Failed to update car");
  }

  redirect(`/cars/${carId}`);
}

export async function deleteCar(formData: FormData) {
  const carId = formData.get("id");

  const res = await fetch(`${process.env.API_URL}/api/cars/${carId}`, {
    method: "DELETE",
  });

  if (!res.ok) {
    const error = await res.json();
    throw new Error("Failed to delete car");
  }

  redirect(`/`);
}
