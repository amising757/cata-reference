# Clear existing data
PlayerAward.destroy_all
Statistic.destroy_all
Player.destroy_all
Award.destroy_all

# Create Awards
mvp = Award.create!(name: "MVP", color: "#FFD700")
all_star = Award.create!(name: "All-Star", color: "#FF6B35") 
champion = Award.create!(name: "Champion", color: "#4CAF50")

# Create Players
players_data = [
  { name: "Marcus Johnson", position: "Point Guard", team: "Thunder", photo_url: "https://via.placeholder.com/300x300" },
  { name: "Tyler Rodriguez", position: "Shooting Guard", team: "Lightning", photo_url: "https://via.placeholder.com/300x300" },
  { name: "Kevin Williams", position: "Small Forward", team: "Storm", photo_url: "https://via.placeholder.com/300x300" },
  { name: "Anthony Davis", position: "Power Forward", team: "Thunder", photo_url: "https://via.placeholder.com/300x300" },
  { name: "Chris Thompson", position: "Center", team: "Lightning", photo_url: "https://via.placeholder.com/300x300" },
  { name: "Jordan Martinez", position: "Point Guard", team: "Storm", photo_url: "https://via.placeholder.com/300x300" },
  { name: "Brandon Lee", position: "Shooting Guard", team: "Thunder", photo_url: "https://via.placeholder.com/300x300" },
  { name: "Alex Parker", position: "Small Forward", team: "Lightning", photo_url: "https://via.placeholder.com/300x300" },
  { name: "Daniel Brown", position: "Power Forward", team: "Storm", photo_url: "https://via.placeholder.com/300x300" },
  { name: "Ryan Wilson", position: "Center", team: "Thunder", photo_url: "https://via.placeholder.com/300x300" },
  { name: "Nathan Garcia", position: "Point Guard", team: "Lightning", photo_url: "https://via.placeholder.com/300x300" },
  { name: "Isaiah Clark", position: "Shooting Guard", team: "Storm", photo_url: "https://via.placeholder.com/300x300" },
  { name: "Cameron Smith", position: "Small Forward", team: "Thunder", photo_url: "https://via.placeholder.com/300x300" },
  { name: "Darius Jackson", position: "Power Forward", team: "Lightning", photo_url: "https://via.placeholder.com/300x300" },
  { name: "Terrell White", position: "Center", team: "Storm", photo_url: "https://via.placeholder.com/300x300" }
]

created_players = players_data.map { |data| Player.create!(data) }

# Create Statistics for 2023 and 2024 seasons
created_players.each do |player|
  # 2023 Season
  Statistic.create!(
    player: player,
    season: "2023",
    points: rand(8.0..25.0).round(1),
    rebounds: rand(3.0..12.0).round(1),
    assists: rand(2.0..9.0).round(1)
  )
  
  # 2024 Season  
  Statistic.create!(
    player: player,
    season: "2024",
    points: rand(8.0..25.0).round(1),
    rebounds: rand(3.0..12.0).round(1),
    assists: rand(2.0..9.0).round(1)
  )
end

# Assign Awards to various players
# MVPs
PlayerAward.create!(player: created_players[0], award: mvp, season: "2023")
PlayerAward.create!(player: created_players[2], award: mvp, season: "2024")

# All-Stars (multiple per season)
all_star_2023 = [0, 1, 3, 6, 8]
all_star_2024 = [2, 4, 5, 9, 11]

all_star_2023.each do |i|
  PlayerAward.create!(player: created_players[i], award: all_star, season: "2023")
end

all_star_2024.each do |i|
  PlayerAward.create!(player: created_players[i], award: all_star, season: "2024")
end

# Champions (team awards)
thunder_players = created_players.select { |p| p.team == "Thunder" }
thunder_players.each do |player|
  PlayerAward.create!(player: player, award: champion, season: "2023")
end

lightning_players = created_players.select { |p| p.team == "Lightning" }
lightning_players.each do |player|
  PlayerAward.create!(player: player, award: champion, season: "2024")
end

puts "Created #{Player.count} players"
puts "Created #{Award.count} awards"
puts "Created #{Statistic.count} statistics"
puts "Created #{PlayerAward.count} player awards"
