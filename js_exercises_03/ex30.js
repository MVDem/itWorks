const text = 'hello World. wonderful World';

//=================1===============

const callBack = (str) => {
  console.log(str);
};

const isString = (str, cb) => {
  if (typeof str === 'string') {
    cb(str);
  }
};

isString(text, callBack);

//=================2===============

const callBack1 = (str) => {
  changedString = str.split(' ').join('-');
  return changedString;
};

const firstWordUpperCase = (str, cb) => {
  const sentences = str.split('.');
  const result = [];
  for (let i = 0; i < sentences.length; i++) {
    let sentanceArr = sentences[i].toLowerCase().split('');
    const firstLetter = sentanceArr[0];
    if (firstLetter !== ' ') {
      sentanceArr[0] = firstLetter.toUpperCase();
    } else {
      sentanceArr[1] = sentanceArr[1].toUpperCase();
    }
    result.push(sentanceArr.join(''));
  }
  console.log(cb(result.join('')));
};

firstWordUpperCase(text, callBack1);
