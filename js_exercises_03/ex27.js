const array = ['Hello', 'Good Day', 'Your Welcome', 'hotdog', 'hamburgers'];

const countLetters = (arr) => {
  const result = {};
  for (let i = 0; i < arr.length; i++) {
    const lettersElem = arr[i].toLowerCase().split('');
    for (let j = 0; j < lettersElem.length; j++) {
      if (lettersElem[j] !== ' ') {
        if (result.hasOwnProperty(lettersElem[j])) {
          result[lettersElem[j]]++;
        } else {
          result[lettersElem[j]] = 1;
        }
      }
    }
  }

  const arrCounts = Object.keys(result).map((key) => result[key]);
  const maxCount = Math.max(...arrCounts);
  const maxCountLetter = Object.keys(result).find(
    (key) => result[key] === maxCount
  );

  return { result, maxCountLetter };
};

console.log(countLetters(array));
