import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

// ================ GET WISHES ================
export async function GET() {
  try {
    const { data, error } = await supabase
      .from("wishes")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) throw error;

    return NextResponse.json(data);
  } catch (error) {
    console.error("Failed to fetch wishes:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// ================ POST WISH ================
export async function POST(req) {
  try {
    const body = await req.json();

    const ip =
      req.headers.get("x-forwarded-for") ||
      req.headers.get("x-real-ip") ||
      "unknown";

    if (!body.name || !body.message) {
      return NextResponse.json(
        { error: "Name and message required" },
        { status: 400 }
      );
    }

    // check how many wishes this IP already sent
    const { data: existing } = await supabase
      .from("wishes")
      .select("id")
      .eq("ip_address", ip);

    if (existing && existing.length >= 1) {
      return NextResponse.json(
        { error: "You can only send 1 wish" },
        { status: 403 }
      );
    }

    const { data, error } = await supabase
      .from("wishes")
      .insert([
        {
          name: body.name,
          message: body.message,
          gif_url: body.gif_url || null,
          created_at: new Date().toISOString(),
          ip_address: ip,
        },
      ])
      .select()
      .single();

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json(data, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}