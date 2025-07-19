import { MongoClient } from 'mongodb';

const MONGODB_URI = process.env.MONGODB_URL || 'mongodb://localhost:27017/intevuePoll';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { question, options, teacherUsername } = req.body;

    if (!question || !options || !teacherUsername) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    const client = await MongoClient.connect(MONGODB_URI);
    const db = client.db();
    
    const poll = {
      question,
      options,
      teacherUsername,
      createdAt: new Date(),
      votes: {}
    };

    const result = await db.collection('polls').insertOne(poll);
    poll._id = result.insertedId;

    await client.close();

    res.status(201).json(poll);
  } catch (error) {
    console.error('Database error:', error);
    res.status(500).json({ 
      message: 'Internal server error',
      error: error.message 
    });
  }
} 