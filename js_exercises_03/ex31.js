const array = [1, 3, 4, 6, 8, 12, 22];

const getMax = (arr) => {
  const max = arr.reduce((acc, elem) => {
    if (acc < elem) {
      return (acc = elem);
    }
  }, 0);
  return max;
};

const getSum = (arr) => {
  const sum = arr.reduce((acc, elem) => {
    return (acc += elem);
  }, 0);
  return sum;
};

const getAverage = (arr) => {
  const sum = arr.reduce((acc, elem) => {
    return (acc += elem);
  }, 0);
  return sum / arr.length;
};

console.log(getMax(array), getSum(array), getAverage(array));
