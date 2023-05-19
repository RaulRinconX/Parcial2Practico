export class Equipo {
  country: string;
  draws: number;
  gamesPlayed: number;
  goalDifferential: number;
  goalsAgainst: number;
  goalsFor: number;
  groupLetter: string;
  groupPoints: number;
  losses: number;
  name: string;
  wins: number;

  constructor(data: any) {
    this.country = data.country;
    this.draws = data.draws;
    this.gamesPlayed = data.games_played;
    this.goalDifferential = data.goal_differential;
    this.goalsAgainst = data.goals_against;
    this.goalsFor = data.goals_for;
    this.groupLetter = data.group_letter;
    this.groupPoints = data.group_points;
    this.losses = data.losses;
    this.name = data.name;
    this.wins = data.wins;
  }
}
