const team = {
  _players : [
 {
  firstName: 'Pablo',
  lastName:'Sanchez',
  age: 11
},
{
  firstName: 'Christian',
  lastName:'Ronaldo',
  age: 15
},
{
  firstName: 'Nicolas',
  lastName:'Martin',
  age: 13
}
],
_games: [
    {
      opponent: 'Christian', 
      teamPoints: 42, 
      opponentPoints: 35
    },
    {
      opponent: 'Nicolas', 
      teamPoints: 22,        
      opponentPoints: 47},
    {
      opponent: 'Pablo', 
      teamPoints: 62, 
      opponentPoints: 57
    }
    ],
  get players() {
    return this._players;
  },
  get games() {
    return this._games;
  },
  addPlayer(firstName, lastName, age) {
    this._players.push({firstName, lastName, age});
  },
  addGame(opponent, teamPoints, opponentPoints) {
    this._games.push({opponent, teamPoints, opponentPoints});
  }
}

team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Lisa', 'Leslie', 44);
team.addPlayer('Bugs', 'Bunny', 76);
console.log(team.players)
team.addGame('Steph', 50, 100);
team.addGame('Bugs', 34, 23);
team.addGame('Lisa', 50, 40);
console.log(team.games)