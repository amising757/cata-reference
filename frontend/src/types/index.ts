export interface Award {
  id: number;
  name: string;
  color: string;
}

export interface PlayerAward extends Award {
  season: string;
}

export interface Statistic {
  season: string;
  points: number;
  rebounds: number;
  assists: number;
}

export interface Player {
  id: number;
  name: string;
  position: string;
  team: string;
  photo_url: string;
  awards: Award[];
}

export interface PlayerDetail extends Player {
  awards: PlayerAward[];
  statistics: Statistic[];
}