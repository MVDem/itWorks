const number = +prompt('enter a number');

const check = (num) => {
  let str = '';
  for (let i = 1; i <= num; i++) {
    console.log(i);
    if (i % 7 === 0) {
      i.toString().includes(7) ? (str += 'BOOM-BOOM, ') : (str += 'BOOM, ');
    } else {
      str += i + ',';
    }
  }
  return str;
};

alert(check(number));
