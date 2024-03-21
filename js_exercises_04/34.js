function calcAverage(arr) {
  var sum = 0; //you need to set the value or type of the variable
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

console.log(calcAverage([85, 90, 92]));

//I've used console/sources in  google chrome brouser
