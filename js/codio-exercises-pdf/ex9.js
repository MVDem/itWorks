const numSiblings = +prompt('How many siblings do you have?');

const getSublings = (numSiblings) => {
  if (numSiblings === 1) {
    return console.log('1 sibling!');
  } else if (numSiblings > 1) {
    return console.log('more then 1 sibling!');
  }
  return console.log('no sibling!');
};

getSublings(numSiblings);
