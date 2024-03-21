const users = [
  {
    id: 167464,
    firstName: 'Jimmy',
    lastName: 'Arnold',
    email: 'jimmya@gmail.com',
  },
  {
    id: 578447,
    firstName: 'Martha',
    lastName: 'Goldman',
    email: 'gold@hotmail.com',
  },
  {
    id: 864578,
    firstName: 'Tim',
    lastName: 'Burton',
    email: 'timmy.hotmail.com',
  },
];

for (let i = 0; i < users.length; i++) {
  const parentElem = document.querySelector('#users');
  const newElem = document.createElement('li');

  const newParagrFirst = document.createElement('p');
  newParagrFirst.textContent = users[i].firstName;
  newElem.appendChild(newParagrFirst);

  const newParagrLAst = document.createElement('p');
  newParagrLAst.textContent = users[i].lastName;
  newElem.appendChild(newParagrLAst);

  parentElem.appendChild(newElem);
}

const arrlist = document.getElementsByTagName('li');
for (let i = 0; i < arrlist.length; i++) {
  arrlist[i].style.listStyle = 'none';
  arrlist[i].setAttribute('data-id', users[i].id);
}
