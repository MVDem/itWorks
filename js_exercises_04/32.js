function findSmallest(a, b, c) {
  if (a > c && b > c) {
    // Boolean > number всегда false
    return c;
  } else if (b > a && c > a) {
    // Boolean > number всегда false
    return a;
  } else {
    return b;
  }
}
findSmallest(52, 66, 2); // missing letter

console.log(findSmallest(52, 66, 2));

//I've used console/sources in  google chrome brouser
