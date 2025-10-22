#!/bin/bash

# Portfolio Website Startup Script
echo "🚀 Starting hiba Portfolio Website..."

# Kill any existing Next.js processes
echo "🔄 Cleaning up existing processes..."
pkill -f "next dev" 2>/dev/null || true

# Wait a moment for processes to terminate
sleep 2

# Start the development server
echo "🎨 Starting development server..."
npm run dev
