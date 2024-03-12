const dateNow = Date.now();

const date = new Date(dateNow);

const getTransform = (num) => {
  return num > 10 ? num : '0' + num;
};

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const weekDays = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];

const getDate = (date) => {
  const weekDay = date.getDay();
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();

  const str = `Tooday is ${weekDays[weekDay - 1]} the ${getTransform(day)} of ${
    months[month]
  } ${year}`;

  return str;
};

console.log(getDate(date));
