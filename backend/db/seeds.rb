# Clear existing data
Statistic.destroy_all
Player.destroy_all

# Real Catamaran League Players - Skeleton for Manual Updates
# Update positions, teams, and stats as needed, then run: rails db:reset
players_data = [
 # Separate multiple nicknames with commas, e.g., "Lightning, The Hammer"
 # Adding Years of Experience for seasons played on FC courts starting 2016-2017 (note: if you had years of not playing ie. Nikhil, those seasons are not counted. Also considering 2019-2020 and 2020-2021 as 1 season due to the pandemic gap
 { name: "Aakash Parthasarathy", position: "SF", team: "Brownball", photo_url: "aakash_parthasarathy.jpg", nicknames: "P, Partha, Partha P, P the MD", awards: "2018 MIP", jersey_number: 31, years_of_experience: "6"  },
 { name: "Amit Singh", position: "PF", team: "Nueva/BB", photo_url: "amit_singh.jpg", nicknames: "The Cat, Yao, Amit'e Singhamire", awards: "HOF Crashout, 2x Coach of the Year", jersey_number: 2, years_of_experience: "7" },
 { name: "Arnav Gurudatt", position: "SF", team: "Brownball", photo_url: "arnav_gurudatt.jpg", nicknames: "Kobra, DataMan", awards: "HOF Rage Quitter", jersey_number: 348, years_of_experience: "7"},
 { name: "Harris Ting", position: "SG", team: "SMHS/BB", photo_url: "harris_ting.jpeg", nicknames: "Ting Ting, Hbreezy", awards: "2019 MIP", jersey_number: 9, years_of_experience: "8" },
 { name: "Makesh Srikannan", position: "PF", team: "SMHS", photo_url: "makesh_srikannan.jpg", nicknames: "The Brao, Mcash", awards: "2019 Finals MVP, All-NBA father", jersey_number: 3, years_of_experience: "4" },
 { name: "Zach Lo", position: "SG", team: "?", photo_url: "zach_lo.jpeg", nicknames: "F*ckle, Plan Z, Go Get It Out The Net, Zach Attack, Snack Randolph", awards: "", jersey_number: 99, years_of_experience: "7" },
 { name: "Saathvik Dirisala", position: "SG", team: "Brownball", photo_url: "saathvik_dirisala.jpeg", nicknames: "2k, Kyrie, Spida, Finesse", awards: "HOF Handle", jersey_number: 11, years_of_experience: "5" },
 { name: "Badri Viswanathan", position: "C", team: "Young Bucks", photo_url: "badri_viswanathan.jpg", nicknames: "Temu Shams, Big Body Benz", awards: "HOF Giannis Glazer", jersey_number: 34, years_of_experience: "?" },
 { name: "Aneek Patil", position: "SG", team: "Brownball/Queens(NC)", photo_url: "aneek_patil.jpg", nicknames: "Korver Bird, One and Done, ", awards: "D1, He's on Sports Reference!", jersey_number: 85, years_of_experience: "7" },
  { name: "Aakash Srinivasan", position: "PG", team: "Brownball", photo_url: "aakash_srinivasan.JPG", nicknames: "The Brown Mamba, Provit, Machine, Aimbot, Srini, Shrine, ", awards: "2024 Champion, 7x All-Cata", jersey_number: 41, years_of_experience: "7" },
 { name: "Chris Yen", position: "PG", team: "Brownball", photo_url: "chris_yen.jpg", nicknames: "Lemon, 6 seconds or less, ChristoCurrency", awards: "Rubiks Cube God", jersey_number: 19, years_of_experience: "6" },
 { name: "James Tilson", position: "PF", team: "Nueva", photo_url: "james_tilson.JPG", nicknames: "Santi, Badri's GOAT", awards: "2020 MIP", jersey_number: 22, years_of_experience: "6" },
 { name: "Nikhil Thakur", position: "SG", team: "Brownball/Nueva", photo_url: "nikhil_thakur.jpeg", nicknames: "1 a day", awards: "2021 2nd Team All-Defense", jersey_number: 6, years_of_experience: "3" },
 { name: "Sameer Bopardikar", position: "C", team: "Brownball", photo_url: "sameer_bopardikar.JPG", nicknames: "The Expert, Creature of the Night, BBIM", awards: "2019 MIP, 2020 3rd Team", jersey_number: 43, years_of_experience: "8" },
  { name: "Arjun Manoj", position: "SG", team: "Brownball", photo_url: "arjun_manoj.jpeg", nicknames: "TJ Manojel, Kyjun", awards: "2017 1st Team, 2019 Ayan Das Teammate of the Year", jersey_number: 24, years_of_experience: "8" },
 { name: "Felmon Madronio", position: "PG", team: "God Squad", photo_url: "felmon_madronio.jpeg", nicknames: "Felmoa, One Punch Man", awards: "2017 All-Star", jersey_number: 25, years_of_experience: "8" },
 { name: "Pranav Ram", position: "PG", team: "Nueva", photo_url: "pranav_ram.jpg", nicknames: "Traitor", awards: "", jersey_number: 26, years_of_experience: "5" },
 { name: "Rahul Munugala", position: "C", team: "Brownball", photo_url: "rahul_munugala.jpg", nicknames: "The Elephant, Capela, Ben, A-Teamer", awards: "3rd Team All Defense", jersey_number: 30, years_of_experience: "6" },
 { name: "Thinura Dharmasiri", position: "SG", team: "ex-BB", photo_url: "thinura_dharmasiri.jpeg", nicknames: "Rodman, T Diddy", awards: "", jersey_number: 17, years_of_experience: "1" },
  { name: "Karthik Viswanathan", position: "PG", team: "Young Bucks", photo_url: "karthik_viswanathan.jpeg", nicknames: "K, MP(K), Noah Lyles", awards: "World Champion of What?", jersey_number: 18, years_of_experience: "3" }
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
