import { v2 as cloudinary } from "cloudinary";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function POST(req) {
  try {
    const data = await req.json();

    if (!data.image || !data.guestName) {
      return new Response(
        JSON.stringify({ error: "Image and guestName are required" }),
        { status: 400 }
      );
    }

    // Remove "data:image/png;base64," prefix if it exists
    const base64Data = data.image.replace(/^data:image\/\w+;base64,/, "");

    const uploadResponse = await cloudinary.uploader.upload(
      `data:image/png;base64,${base64Data}`,
      {
        folder: "wedding-gallery",
      }
    );

    const photo = await prisma.photo.create({
      data: {
        imageUrl: uploadResponse.secure_url,
        guestName: data.guestName,
        caption: data.caption,
      },
    });

    return new Response(JSON.stringify(photo), { status: 201 });
  } catch (error) {
    console.error("Upload failed:", error);
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}
