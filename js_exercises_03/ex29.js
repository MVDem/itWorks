const int = 3;

const steps = (count) => {
  const arr = Array(count).fill(' ');
  for (let i = 1; i <= count; i++) {
    arr.fill('#', 0, i);
    console.log(arr.join(''));
  }
};

steps(int);
