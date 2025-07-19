# Deployment Guide for Live Polling System

## Vercel Deployment

### Prerequisites
1. MongoDB Atlas account (free tier available)
2. Vercel account
3. GitHub account

### Step 1: Set up MongoDB Atlas
1. Go to [MongoDB Atlas](https://www.mongodb.com/atlas)
2. Create a free account
3. Create a new cluster
4. Get your connection string
5. Add your IP address to the whitelist (or use 0.0.0.0/0 for all IPs)

### Step 2: Deploy to Vercel
1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Import your GitHub repository
4. Set the following environment variables in Vercel:
   - `MONGODB_URL`: Your MongoDB Atlas connection string
   - `VITE_NODE_ENV`: production
   - `VITE_API_BASE_URL`: /api

### Step 3: Configure Vercel Settings
- Framework Preset: Vite
- Build Command: `cd frontend && npm install && npm run build`
- Output Directory: `frontend/dist`
- Install Command: `cd frontend && npm install`

### Step 4: Deploy
Click "Deploy" and wait for the build to complete.

## Environment Variables

### Required Environment Variables
```env
MONGODB_URL=mongodb+srv://username:password@cluster.mongodb.net/intevuePoll?retryWrites=true&w=majority
VITE_NODE_ENV=production
VITE_API_BASE_URL=/api
```

### Optional Environment Variables
```env
NODE_ENV=production
```

## API Endpoints

After deployment, your API endpoints will be:
- `POST /api/teacher-login` - Teacher authentication
- `GET /api/polls/[teacherUsername]` - Get polls for a teacher
- `POST /api/create-poll` - Create a new poll
- `GET /api/socket` - WebSocket endpoint (placeholder)

## Troubleshooting

### Common Issues:
1. **MongoDB Connection Error**: Check your MongoDB Atlas connection string and IP whitelist
2. **Build Errors**: Make sure all dependencies are installed
3. **API 404 Errors**: Check that the API routes are correctly configured in vercel.json

### Debug Steps:
1. Check Vercel deployment logs
2. Verify environment variables are set correctly
3. Test API endpoints using Postman or curl
4. Check browser console for frontend errors

## Real-time Features

For full real-time functionality, consider using:
- [Pusher](https://pusher.com/) - WebSocket service
- [Socket.io](https://socket.io/) - With a separate backend deployment
- [Firebase](https://firebase.google.com/) - Real-time database

## Support

If you encounter issues:
1. Check the Vercel deployment logs
2. Verify your MongoDB connection
3. Test the API endpoints individually
4. Check browser console for errors 