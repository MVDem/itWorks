const num = +prompt('enter a number score');

const getScore = (num) => {
  if (num > 100) return 'incorrect value';
  if (num < 0) return 'incorrect value';
  if (num >= 90) return 'A';
  if (num >= 80) return 'B';
  if (num >= 70) return 'C';
  if (num >= 65) return 'D';
  return 'F';
};
console.log(getScore(num));
