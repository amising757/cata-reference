# Production Database Management

## 🚀 Deployed Player Data

The production database now contains **16 real Catamaran League players** with their photos:

### Teams Structure:
- **Catamaran Thunder** (6 players): Aakash Parthasarathy, Amit Singh, Arnav Gurudatt, Harris Ting, Makesh Srikannan, Zach Lo
- **Catamaran Lightning** (5 players): Aakash Srinivasan, Chris Yen, James Tilson, Nikhil Thakur, Sameer Bopardikar  
- **Catamaran Storm** (5 players): Arjun Manoj, Felmon Madronio, Pranav Ram, Rahul Munugala, Thinura Dharmasiri

## 🔧 How to Update Production Data

### Method 1: Railway Console (Recommended)

```bash
# Access Rails console on Railway
railway run rails console

# Update individual player data
player = Player.find_by(name: "Amit Singh")
player.update(position: "Point Guard", team: "Catamaran Thunder")

# Bulk update team names
Player.where(team: "Catamaran Thunder").update_all(team: "Thunder")

# Add/update player stats
player = Player.find_by(name: "Amit Singh")  
stat = player.statistics.find_by(season: "2024")
stat.update(points: 22.5, rebounds: 8.2, assists: 5.1)

# Add new awards
mvp_award = Award.find_by(name: "MVP")
PlayerAward.create!(player: player, award: mvp_award, season: "2024")
```

### Method 2: Database Migrations

Create migration files for systematic updates:

```bash
# Generate migration
railway run rails generate migration UpdatePlayerPositions

# Edit the migration file, then run:
railway run rails db:migrate
```

### Method 3: Reset Database (⚠️ Destructive)

```bash
# WARNING: This deletes ALL production data
railway run rails db:reset
```

## 🖼️ Image Management

All player images are included in the asset pipeline:
- **Development**: Served from `app/assets/images/players/`
- **Production**: Fingerprinted and cached (`/assets/players/amit_singh-abc123.jpg`)
- **Fallback**: `default-player.svg` for missing images

### Adding New Images:
1. Add image to `app/assets/images/players/`
2. Update player: `player.update(photo_url: "new_player.jpg")`
3. Redeploy to compile new assets

## 📊 Current Database State

- **16 Players** with real names and photos
- **3 Awards**: MVP (Gold), All-Star (Blue), Champion (Green) 
- **32 Statistics** (2 seasons per player)
- **12 Player Awards** distributed across teams

## 🎯 Recommended Workflow

1. **Deploy current barebones data** to get photos working
2. **Use Railway console** to update specific details:
   - Correct positions and team assignments
   - Update stats with real data
   - Add/remove awards as needed
3. **Iterate gradually** without losing data