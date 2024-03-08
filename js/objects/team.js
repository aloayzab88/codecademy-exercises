const team = {
  _players: [
    {
      firstName: 'Alejandro',
      lastName: 'Loayza',
      age: 35
    },
    {
      firstName: 'Sandra',  
      lastName: 'Martel',
      age: 30
    },
    {
      firstName: 'Freya',
      lastName: 'Loayza',
      age: 7
    }
  ],
  get players() {
    return this._players;
  },
  addPlayer(firstName, lastName, age) {
    const player = {
      firstName,
      lastName,
      age
    };
    this._players.push(player);
  },
  _games: [
    {
      opponent: 'Team Rocket',
      teamPoints: 10,
      opponentPoints: 5
    },
    {
      opponent: 'Team Calor',
      teamPoints: 3,
      opponentPoints: 15
    },
    {
      opponent: 'Team Frio',
      teamPoints: 5,
      opponentPoints: 5
    }
  ],
  get games() {
    return this._games;
  },
  addGame(opponent, teamPoints, opponentPoints) {
    const game = {
      opponent,
      teamPoints,
      opponentPoints
    };
    this._games.push(game);
  },
  get totalGames() {
    return this.games.length;
  },
  get averageScore() {
    let sum = 0;
    for (const game of this._games) {
        sum+= game.teamPoints;
    }
    return sum/this._games.length;
  }
}

team.addPlayer('Bugs', 'Bunny', 76);
team.addGame('Titans', 100, 98);
console.log(team.players);
console.log(team.games);
console.log(team.totalGames);
console.log(team.averageScore);