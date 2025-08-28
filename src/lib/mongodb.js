import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
const options = {};

if (!uri) {
  throw new Error("⚠️ Please add your MongoDB URI to .env.local");
}

let client;
let clientPromise;

if (process.env.NODE_ENV === "development") {
  // Reuse connection in dev mode (hot reload)
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  // New client in production
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export default clientPromise;
