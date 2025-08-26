# 🏀 Cata-Reference

A fun basketball-reference.com clone for the Cata rec league!

## ✨ Features

- **Player Profiles** - Individual pages with photos, nicknames, and stats
- **Real-time Search** - Find players instantly as you type
- **Award Badges** - Colorful MVP, All-Star, and Champion badges
- **Basketball-Reference Styling** - Orange headers and clean tables
- **Simple Stats** - Just Points, Rebounds, and Assists (no complex analytics!)

## 🛠️ Tech Stack

- **Full-Stack**: Rails 8 + PostgreSQL (SQLite in development)
- **Frontend**: Server-side HTML with Tailwind CSS + Stimulus JS
- **Hosting**: Railway (single deployment)

## 🚀 Getting Started

### Full Rails Application
```bash
cd backend
bundle install
rails db:create db:migrate db:seed

# Development (with live CSS reloading)
bin/dev

# Or standard Rails server
rails server
```

Visit http://localhost:3000 to view the site!

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
- **Full App**: Railway free tier (PostgreSQL included)
- **Domain**: Point cata-reference.com to Railway deployment
- **Total cost**: ~$15/year (domain only!)

Single command deployment:
```bash
# Deploy to Railway
railway deploy
```

## 📱 Pages

- **Home** (`/`) - Featured players and search
- **Players** (`/players`) - Full player grid with filters  
- **Player Profile** (`/players/:id`) - Individual stats and awards
- **Search** - Real-time player search with Stimulus JS

Built with ❤️ for the Cata Basketball League!