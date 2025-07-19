import { MongoClient } from 'mongodb';

const MONGODB_URI = process.env.MONGODB_URL || 'mongodb://localhost:27017/intevuePoll';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { teacherUsername } = req.query;

  try {
    const client = await MongoClient.connect(MONGODB_URI);
    const db = client.db();
    
    // Get polls for the specific teacher
    const polls = await db.collection('polls')
      .find({ teacherUsername })
      .sort({ createdAt: -1 })
      .toArray();

    await client.close();

    res.status(200).json(polls);
  } catch (error) {
    console.error('Database error:', error);
    res.status(500).json({ 
      message: 'Internal server error',
      error: error.message 
    });
  }
} 