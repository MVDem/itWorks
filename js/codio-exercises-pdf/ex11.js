const players = [
  { name: 'John', results: [89, 120, 103] },
  { name: 'Mike', results: [116, 94, 123] },
  { name: 'Mary', results: [97, 134, 105] },
];

const getStat = (player) => {
  let sum = 0;
  for (let i = 0; i < player.results.length; i++) {
    sum += player.results[i];
  }
  const stat = sum / player.results.length;
  return stat;
};

const getWinner = (players) => {
  const list = [...players];
  let winner = [list[0]];
  let statWinner = getStat(winner[0]);

  for (let i = 0; i < list.length; i++) {
    stat = getStat(list[i]);
    if (statWinner < stat) {
      winner = [];
      winner.push(list[i]);
      statWinner = getStat(list[i]);
    } else if (statWinner === stat) {
      winner.push(list[i]);
    }
  }
  const str = `winner is ${winner.map((e) => {
    return e.name;
  })},his average score is ${statWinner}`;
  return str;
};

console.log(getWinner(players));
