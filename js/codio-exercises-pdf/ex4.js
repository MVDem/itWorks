const getArea = (radius) => {
  const p = 3.14;
  const area = p * radius * radius;
  return area;
};

const rad = prompt('enter a radius');

alert(getArea(rad));
alert(getArea(rad).toFixed(2));
