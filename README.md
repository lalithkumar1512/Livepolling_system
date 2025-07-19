# Live Polling System

A real-time polling application built with React frontend and Node.js backend with Socket.io for live updates.

## Features

- **Real-time Polling**: Create and participate in live polls with instant results
- **Role-based Access**: Separate interfaces for teachers and students
- **Live Chat**: Real-time chat functionality during polls
- **Poll History**: View and manage previous polls
- **User Management**: Kick out participants and manage active users

## Tech Stack

### Frontend
- React 18
- Vite
- React Router DOM
- Socket.io Client
- Bootstrap 5
- Axios

### Backend
- Node.js
- Express.js
- Socket.io
- MongoDB
- Mongoose

## Project Structure

```
Livepollingsystem/
├── frontend/          # React application
│   ├── src/
│   │   ├── components/
│   │   ├── Pages/
│   │   └── App.jsx
│   └── package.json
├── backend/           # Node.js server
│   ├── src/
│   │   ├── controllers/
│   │   ├── models/
│   │   └── app.js
│   └── package.json
└── README.md
```

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or cloud)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Livepollingsystem
```

2. Install backend dependencies:
```bash
cd backend
npm install
```

3. Install frontend dependencies:
```bash
cd ../frontend
npm install
```

4. Set up environment variables:

Create `.env` file in the backend directory:
```env
PORT=3000
MONGODB_URL=your_mongodb_connection_string
NODE_ENV=development
```

Create `.env` file in the frontend directory:
```env
VITE_NODE_ENV=development
VITE_API_BASE_URL=http://localhost:3000
```

5. Start the development servers:

Backend:
```bash
cd backend
npm start
```

Frontend:
```bash
cd frontend
npm run dev
```

## Deployment

### Vercel Deployment

The frontend is configured for Vercel deployment. The backend needs to be deployed separately (e.g., on Railway, Render, or Heroku).

### Environment Variables for Production

Set these environment variables in your deployment platform:

**Backend:**
- `PORT`: Server port
- `MONGODB_URL`: MongoDB connection string
- `NODE_ENV`: production

**Frontend:**
- `VITE_NODE_ENV`: production
- `VITE_API_BASE_URL`: Your backend API URL

## Usage

1. **Teacher Login**: Teachers can create polls and view results
2. **Student Access**: Students can join polls and submit answers
3. **Real-time Updates**: All participants see live results and chat messages
4. **Poll Management**: Teachers can kick out users and manage active polls

## API Endpoints

- `POST /teacher-login` - Teacher authentication
- `GET /polls/:teacherUsername` - Get polls for a teacher
- WebSocket events for real-time communication

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is licensed under the MIT License. 