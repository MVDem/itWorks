//===1===
const title = document.querySelector('.start-here');
title.textContent = 'main title';

//===2===
const newElem = document.createElement('li');
newElem.textContent = 'sub title 4';
const parentElem = document.querySelector('ul > li > ul');
parentElem.appendChild(newElem);

//===3===
const lastLiElem = document.querySelector('body > ul > li:last-child');
lastLiElem.remove();

//===4===
const titleElem = document.querySelector('title');
titleElem.textContent = 'Master Of The Dom';

//===5===
const pElem = document.querySelector('p');
pElem.textContent = 'Lorem';
