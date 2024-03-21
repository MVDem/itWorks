const textElem = document.querySelector('p');
const btnIncrease = document.querySelector('#increase');
const btnDecrease = document.querySelector('#decrease');

btnIncrease.addEventListener('click', (e) => {
  const styles = getComputedStyle(textElem);
  fontFace = +styles.getPropertyValue('font-size').slice(0, -2);
  textElem.style.fontSize = fontFace < 100 && fontFace + 1 + 'px';
});

btnDecrease.addEventListener('click', (e) => {
  const styles = getComputedStyle(textElem);
  fontFace = +styles.getPropertyValue('font-size').slice(0, -2);
  textElem.style.fontSize = fontFace > 6 && fontFace - 1 + 'px';
});
