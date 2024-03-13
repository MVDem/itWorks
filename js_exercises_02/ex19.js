const people = ['Greg', 'Mary', 'Devon', 'James'];

const print = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
};

print(people);

people.shift();
console.log(people);

people.pop();
console.log(people);

people.unshift('Matt');
console.log(people);

people.push('Max');
console.log(people);

const printbeforeMary = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    if (arr[i] === 'Mary') {
      break;
    }
  }
};
printbeforeMary(people);

const copy = people.slice(2);
console.log(copy);

console.log(people.indexOf('foo'));

people.splice(2, 1, 'Elizabeth', 'Artie');
console.log(people);

const withBob = (arr) => {
  return arr.map((name) => name + 'Bob');
};
console.log(withBob(people));
