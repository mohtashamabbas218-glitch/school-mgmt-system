# Getting Started with EduHub

## Project Setup

This guide will help you set up the EduHub School Management System on your local machine.

## Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- MongoDB (local or Atlas)
- Git
- Docker (optional)

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/mohtashamabbas218-glitch/school-mgmt-system.git
cd school-mgmt-system
```

### 2. Backend Setup

```bash
cd backend

# Install dependencies
npm install

# Create .env file
cp .env.example .env

# Update .env with your MongoDB connection string
# Edit .env and set MONGODB_URI

# Start the backend server
npm run dev
```

The backend will run on `http://localhost:5000`

### 3. Frontend Setup

```bash
cd frontend

# Install dependencies
npm install

# Create .env file
cp .env.example .env

# Start the frontend development server
npm start
```

The frontend will run on `http://localhost:3000`

## Using Docker (Optional)

```bash
# Build and run all services
docker-compose up --build

# Access the application
# Frontend: http://localhost:3000
# Backend: http://localhost:5000
# MongoDB: localhost:27017
```

## Project Structure

```
school-mgmt-system/
├── frontend/               # React frontend
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   ├── pages/         # Page components
│   │   ├── services/      # API service layer
│   │   ├── store/         # Redux store
│   │   └── styles/        # Global styles
│   └── package.json
├── backend/               # Express backend
│   ├── src/
│   │   ├── models/        # MongoDB models
│   │   ├── routes/        # API routes
│   │   ├── controllers/   # Route controllers
│   │   ├── middleware/    # Custom middleware
│   │   └── config/        # Configuration files
│   └── package.json
└── docs/                  # Documentation
```

## Next Steps

1. Read the [API Documentation](./API.md)
2. Check out the [Database Schema](./DATABASE.md)
3. Review [Development Guidelines](./DEVELOPMENT.md)

## Troubleshooting

### MongoDB Connection Error

If you get a MongoDB connection error:

1. Ensure MongoDB is running
2. Check the MONGODB_URI in your .env file
3. Verify your MongoDB connection string

### Port Already in Use

If port 5000 or 3000 is already in use:

1. Change the PORT in the .env file
2. Or kill the process using that port

## Support

For issues or questions, please open an issue on GitHub or contact the development team.
