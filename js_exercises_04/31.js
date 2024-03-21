function getSum(arr1, arr2) {
  let sum = 0; // const instead of let
  for (let i = 0; i < arr1.length; i++) {
    sum += arr1[i];
  }
  for (let i = 0; i < arr2.length; i++) {
    sum += arr2[i];
  }
  return sum; //return element missing
}

console.log(getSum([1, 2, 3], [(5, 66, 23)])); // missing sign ','

//I've used console/sources in  google chrome brouser
