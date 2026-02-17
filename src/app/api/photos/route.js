import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const photos = await prisma.photo.findMany({
      orderBy: { createdAt: "desc" },
    });
    return new Response(JSON.stringify(photos), { status: 200 });
  } catch (error) {
    console.error("Failed to fetch photos:", error);
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}
