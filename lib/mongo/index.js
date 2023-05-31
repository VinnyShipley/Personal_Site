import { MongoClient } from 'mongodb';

const URI = process.env.MONGODB_URI;
const options = {};

if (!URI) throw new Error('Please add your Mongo URI to .env.local');

let client = new MongoClient(URI, options);
let clientPromise;

if (process.env.NODE_ENV !== 'production') {
  if (!global._mongoClientPromise) {
    global._mongoClientPromise = client.connect().catch((error) => {
      console.error('Failed to connect to MongoDB:', error);
      throw error;
    });
  }

  clientPromise = global._mongoClientPromise;
} else {
  clientPromise = client.connect().catch((error) => {
    console.error('Failed to connect to MongoDB:', error);
    throw error;
  });
}

export default clientPromise;