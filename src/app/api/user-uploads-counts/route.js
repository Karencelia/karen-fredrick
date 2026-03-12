// app/api/user-upload-count/route.js
import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function GET(req) {
  try {
    /* ===== get and normalize IP ===== */
    let ip =
      req.headers.get("x-forwarded-for") ||
      req.headers.get("x-real-ip") ||
      "unknown";

    if (ip.includes(",")) {
      ip = ip.split(",")[0].trim();
    }

    const { data, error } = await supabase
      .from("photos")
      .select("id")
      .eq("ip_address", ip);

    if (error) throw error;

    return NextResponse.json({ 
      count: data.length,
      remaining: Math.max(0, 2 - data.length),
      hasReachedLimit: data.length >= 2
    });
  } catch (error) {
    console.error("Failed to fetch upload count:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}