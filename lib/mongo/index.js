import { MongoClient } from 'mongodb';

const URI = process.env.MONGODB_URI;
const options = {};

if (!URI) throw new Error('Please add your Mongo URI to .env.local');

let client = new MongoClient(URI, options);

	if (process.env.Node_ENV !== 'production') {
		if (!global._mongoClientPromise) {
			global._mongoClientPromise = client.connect();
		}

		clientPromise = global._mongoClientPromise
	} else {
		clientPromise = client.connect()
	}


export default clientPromise;