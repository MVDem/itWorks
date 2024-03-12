const color = prompt('enter a color');

const check = (color) => {
  switch (color.toLowerCase()) {
    case 'yellow':
    case 'pink':
    case 'orange':
      return 'light color';
    case 'blue':
    case 'purple':
    case 'brown':
      return 'dark color';
    default:
      return 'Unknown color';
  }
};

alert(check(color));
