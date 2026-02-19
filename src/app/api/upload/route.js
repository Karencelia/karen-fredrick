import { NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";
import { supabase } from "@/lib/supabase";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function POST(req) {

  console.log("Cloud Name:", process.env.CLOUDINARY_CLOUD_NAME);
console.log("API Key:", process.env.CLOUDINARY_API_KEY);
console.log("API Secret:", process.env.CLOUDINARY_API_SECRET);

  try {
    const data = await req.json();

    if (!data.image || !data.guestName) {
      return NextResponse.json(
        { error: "Image and guestName are required" },
        { status: 400 }
      );
    }

    // Upload base64 image to Cloudinary
 const uploadResponse = await cloudinary.uploader.upload(data.image, {
  folder: "wedding-gallery",
});

    // Save metadata to Supabase
    const { data: photo, error } = await supabase
      .from("photos")
      .insert([
        {
          image_url: uploadResponse.secure_url,
          guest_name: data.guestName,
          caption: data.caption || null,
        },
      ])
      .select()
      .single(); // returns the newly inserted row

    if (error) throw error;

    return NextResponse.json(photo, { status: 201 });
  } catch (error) {
    console.error("Upload failed:", error);
    return NextResponse.json(
      { error: error.message || "Upload failed" },
      { status: 500 }
    );
  }
}
