# Clear existing data
Statistic.destroy_all
Player.destroy_all

# Real Catamaran League Players - Skeleton for Manual Updates
# Update positions, teams, and stats as needed, then run: rails db:reset
players_data = [
  # Separate multiple nicknames with commas, e.g., "Lightning, The Hammer"
  { name: "Aakash Parthasarathy", position: "SF", team: "Brownball", photo_url: "aakash_parthasarathy.jpg", nicknames: "P, Partha", awards: "2018 MIP" },
  { name: "Amit Singh", position: "PF", team: "Nueva/BB", photo_url: "amit_singh.jpg", nicknames: "The Cat, Yao", awards: "HOF Crashout" },
  { name: "Arnav Gurudatt", position: "SF", team: "Brownball", photo_url: "arnav_gurudatt.jpg", nicknames: "Kobra", awards: "HOF Rage Quitter" },
  { name: "Harris Ting", position: "SG", team: "SMHS/BB", photo_url: "harris_ting.jpeg", nicknames: "Ting Ting", awards: "2019 MIP" },
  { name: "Makesh Srikannan", position: "PF", team: "SMHS", photo_url: "makesh_srikannan.jpg", nicknames: "The Brao", awards: "2024 All-Star" },
  { name: "Zach Lo", position: "SG", team: "?", photo_url: "zach_lo.jpeg", nicknames: "Plan Z, Go Get It Out The Net, Zach Attack, Snack Randolph", awards: "" },
  { name: "Saathvik Dirisala", position: "SG", team: "Brownball", photo_url: "saathvik_dirisala.jpeg", nicknames: "2k, Kyrie", awards: "HOF Handle" },
  { name: "Badri Viswanathan", position: "C", team: "Young Bucks", photo_url: "badri_viswanathan.jpeg", nicknames: "Temu Shams, Big Body Benz", awards: "HOF Giannis Glazer" },
  
  { name: "Aakash Srinivasan", position: "PG", team: "Brownball", photo_url: "aakash_srinivasan.JPG", nicknames: "The Brown Mamba, Provit", awards: "2024 Champion, 2023 All-Star" },
  { name: "Chris Yen", position: "PG", team: "Brownball", photo_url: "chris_yen.jpg", nicknames: "6 seconds or less", awards: "Rubiks Cube God" },
  { name: "James Tilson", position: "PF", team: "Nueva", photo_url: "james_tilson.JPG", nicknames: "Santi, Badri's GOAT", awards: "2020 MIP" },
  { name: "Nikhil Thakur", position: "SG", team: "Brownball/Nueva", photo_url: "nikhil_thakur.jpeg", nicknames: "1 a day", awards: "" },
  { name: "Sameer Bopardikar", position: "C", team: "Brownball", photo_url: "sameer_bopardikar.JPG", nicknames: "The Expert, Creature of the Night, BBIM", awards: "2017 MIP, 2018 3rd Team" },
  
  { name: "Arjun Manoj", position: "SG", team: "Brownball", photo_url: "arjun_manoj.jpeg", nicknames: "TJ Manojel", awards: "2012 1st Team" },
  { name: "Felmon Madronio", position: "PG", team: "God Squad", photo_url: "felmon_madronio.jpeg", nicknames: "Felmoa, One Punch Man", awards: "2024 All-Star" },
  { name: "Pranav Ram", position: "PG", team: "Nueva", photo_url: "pranav_ram.jpg", nicknames: "Traitor", awards: "" },
  { name: "Rahul Munugala", position: "C", team: "Brownball", photo_url: "rahul_munugala.jpg", nicknames: "The Elephant", awards: "3rd Team All Defense" },
  { name: "Thinura Dharmasiri", position: "SG", team: "ex-BB", photo_url: "thinura_dharmasiri.jpeg", nicknames: "T Diddy", awards: "" }
]

# TODO: Update positions above, then uncomment and modify stats below as needed
# Example positions: "Point Guard", "Shooting Guard", "Small Forward", "Power Forward", "Center"

created_players = players_data.map { |data| Player.create!(data) }

# Create placeholder statistics (update with real stats later)
created_players.each do |player|
  # 2023 Season - TODO: Replace with real stats
  Statistic.create!(
    player: player,
    season: "2023",
    points: 15.0,  # Update with real data
    rebounds: 8.0, # Update with real data  
    assists: 5.0   # Update with real data
  )
  
  # 2024 Season - TODO: Replace with real stats
  Statistic.create!(
    player: player,
    season: "2024", 
    points: 16.0,  # Update with real data
    rebounds: 8.5, # Update with real data
    assists: 5.2   # Update with real data
  )
end

puts "Created #{Player.count} players"
puts "Created #{Statistic.count} statistics"
