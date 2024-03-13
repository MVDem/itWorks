const array = [3, 4, 4, 3, 6, 3];

const unicArr = (arr) => {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr.indexOf(arr[i]) >= i) newArr.push(arr[i]);
  }
  return newArr;
};

console.log(unicArr(array));
