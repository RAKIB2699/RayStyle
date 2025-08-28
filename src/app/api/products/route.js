import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";

// GET: all products
export async function GET() {
  const client = await clientPromise;
  const db = client.db(process.env.MONGODB_DB);
  const products = await db.collection("products").find().sort({ createdAt: -1 }).toArray();

  return NextResponse.json(products);
}

// POST: add product
export async function POST(req) {
  try {
    const body = await req.json();
    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_DB);

    const newProduct = {
      ...body,
      createdAt: new Date(),
    };

    const result = await db.collection("products").insertOne(newProduct);
    return NextResponse.json({ _id: result.insertedId, ...newProduct }, { status: 201 });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
