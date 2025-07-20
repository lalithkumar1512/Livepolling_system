import { MongoClient } from 'mongodb';

const MONGODB_URI = process.env.MONGODB_URL || 'mongodb+srv://22bds024:0ccB6c6qeWmMXs90@cluster0.cjcdwkq.mongodb.net';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const client = await MongoClient.connect(MONGODB_URI);
    const db = client.db();
    
    // Generate a random username for the teacher
    const username = `teacher_${Math.random().toString(36).substr(2, 9)}`;
    
    // Store teacher info in database
    await db.collection('teachers').insertOne({
      username,
      createdAt: new Date()
    });

    await client.close();

    res.status(200).json({ 
      username,
      message: 'Teacher login successful' 
    });
  } catch (error) {
    console.error('Database error:', error);
    res.status(500).json({ 
      message: 'Internal server error',
      error: error.message 
    });
  }
} 