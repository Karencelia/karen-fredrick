import { NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";
import { supabase } from "@/lib/supabase";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function POST(req) {
  try {
    const data = await req.json();

    if (!data.image || !data.guestName) {
      return NextResponse.json(
        { error: "Image and guestName are required" },
        { status: 400 }
      );
    }

    /* ===== get and normalize IP ===== */
    let ip =
      req.headers.get("x-forwarded-for") ||
      req.headers.get("x-real-ip") ||
      "unknown";

    // take first IP if there are multiple
    if (ip.includes(",")) {
      ip = ip.split(",")[0].trim();
    }

    /* ===== check upload limit ===== */
    const { data: existing, error: countError } = await supabase
      .from("photos")
      .select("id")
      .eq("ip_address", ip);

    if (countError) throw countError;

    if (existing.length >= 2) {
      return NextResponse.json(
        { error: "You can only upload 2 photos per IP address" },
        { status: 403 }
      );
    }

    // Upload base64 image to Cloudinary
    const uploadResponse = await cloudinary.uploader.upload(data.image, {
      folder: "wedding-gallery",
    });

    // Save metadata to Supabase with IP address
    const { data: photo, error } = await supabase
      .from("photos")
      .insert([
        {
          image_url: uploadResponse.secure_url,
          guest_name: data.guestName,
          caption: data.caption || null,
          ip_address: ip, // Add IP address to the record
          created_at: new Date().toISOString(),
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