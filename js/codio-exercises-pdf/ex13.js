const year = +prompt('enter a year');

const checkYear = (year) => {
  if (!(year % 4 === 0)) return alert('This is not a leap year.');
  if (year % 100 === 0 && !(year % 400 === 0))
    return alert('This is not a leap year.');
  alert('It is indeed a leap year');
};

checkYear(year);
