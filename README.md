# 🏀 Cata-Reference

A fun basketball-reference.com clone for the Cata rec league!

## ✨ Features

- **Player Profiles** - Individual pages with photos, nicknames, and stats
- **Real-time Search** - Find players instantly as you type
- **Award Badges** - Colorful MVP, All-Star, and Champion badges
- **Basketball-Reference Styling** - Orange headers and clean tables
- **Simple Stats** - Just Points, Rebounds, and Assists (no complex analytics!)

## 🛠️ Tech Stack

- **Backend**: Rails 8 API + PostgreSQL (SQLite in development)
- **Frontend**: React + TypeScript + Tailwind CSS
- **Hosting**: Railway (backend) + Vercel (frontend)

## 🚀 Getting Started

### Backend (Rails API)
```bash
cd backend
bundle install
rails db:create db:migrate db:seed
rails server -p 3001
```

### Frontend (React)
```bash
cd frontend
npm install
npm run dev
```

Visit http://localhost:5173 to view the site!

## 📊 Sample Data

- **15 players** across 3 teams (Thunder, Lightning, Storm)
- **3 award types** with distinct colors
- **Stats for 2023 & 2024** seasons with realistic averages
- **Award distribution** including MVPs, All-Stars, and Champions

## 🎯 MVP Simplifications

✂️ **Removed from basketball-reference.com:**
- Complex stats (FG%, 3P%, PER, Win Shares)
- Game logs and shot charts  
- Advanced analytics and multiple tabs

✨ **Added for Cata League:**
- Fun player nicknames ("Lightning", "The Hammer")
- Simplified 3-stat focus (Points/Rebounds/Assists)
- Clean award badge system
- Mobile-friendly design

## 🎨 Design

Matches basketball-reference.com aesthetic:
- Orange gradient header (#ff6600)
- Brown navigation (#8B4513)
- Award colors: MVP (Gold), All-Star (Blue), Champion (Green)
- Clean data tables with alternating rows

## 🚀 Deployment

Ready for free hosting:
- **Backend**: Railway free tier (PostgreSQL included)
- **Frontend**: Vercel/Netlify free tier
- **Domain**: Point cata-reference.com to frontend
- **Total cost**: ~$15/year (domain only!)

## 📱 Pages

- **Home** (`/`) - Featured players and search
- **Players** (`/players`) - Full player grid with filters
- **Player Profile** (`/players/:id`) - Individual stats and awards

Built with ❤️ for the Cata Basketball League!