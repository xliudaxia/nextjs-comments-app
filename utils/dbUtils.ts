import { MongoClient, Sort } from "mongodb";

export async function connectDatabase() {
  const client = await MongoClient.connect("mongodb://root:******@120.53.241.206:27017");

  return client;
}

export async function insertDocument(
  client: MongoClient,
  collection: string,
  document: any
) {
  const db = client.db('comments');

  const result = await db.collection(collection).insertOne(document);

  return result;
}

export async function getAllDocuments(
  client: MongoClient,
  collection: string,
  sort: Sort
) {
  const db = client.db('comments');

  const documents = await db.collection(collection).find().sort(sort).toArray();

  return documents;
}
