import clientPromise from "@/lib/mongodb";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("yourDBname");
    const products = await db
      .collection("products")
      .find({})
      .sort({ createdAt: -1 }) // optional: newest first
      .limit(6)
      .toArray();

    return Response.json(products, { status: 200 });
  } catch (error) {
    console.error("Error fetching highlight products:", error);
    return Response.json({ message: "Failed to fetch" }, { status: 500 });
  }
}
