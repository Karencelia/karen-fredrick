import { supabase } from "@/lib/supabase";
import { NextResponse } from "next/server";

/* ================= GET PHOTOS ================= */
export async function GET() {
  try {
    const { data, error } = await supabase
      .from("photos")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) throw error;

    return NextResponse.json(data);
  } catch (error) {
    console.error("Failed to fetch photos:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

/* ================= POST PHOTO ================= */
export async function POST(req) {
  try {
    const body = await req.json();

    /* ===== get and normalize IP ===== */
    let ip =
      req.headers.get("x-forwarded-for") ||
      req.headers.get("x-real-ip") ||
      "unknown";

    // take first IP if there are multiple
    if (ip.includes(",")) {
      ip = ip.split(",")[0].trim();
    }

    if (!body.image_url || !body.guest_name) {
      return NextResponse.json(
        { error: "Image and guest name are required" },
        { status: 400 }
      );
    }

    /* ===== check upload limit ===== */
    const { data: existing, error: countError } = await supabase
      .from("photos")
      .select("id")
      .eq("ip_address", ip);

    if (countError) throw countError;

    if (existing.length >= 2) {
      return NextResponse.json(
        { error: "You can only upload 2 photos" },
        { status: 403 }
      );
    }

    /* ===== insert photo ===== */
    const { data, error } = await supabase
      .from("photos")
      .insert([
        {
          image_url: body.image_url,
          guest_name: body.guest_name,
          caption: body.caption || null,
          created_at: new Date().toISOString(),
          ip_address: ip,
        },
      ])
      .select()
      .single();

    if (error) throw error;

    return NextResponse.json(data, { status: 201 });

  } catch (error) {
    console.error("Photo upload failed:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}