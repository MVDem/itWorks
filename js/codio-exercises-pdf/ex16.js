const pass = prompt('enter a password');

const check1 = (pass) => {
  if (pass.length < 7) {
    return alert('Weak');
  }
  return alert('Strong');
};

const check2 = (pass) => {
  return pass.length < 7 ? alert('Weak') : alert('Strong');
};

const check3 = (pass) => {
  let result = (pass.length < 7 && 'Weak') || (pass.length >= 7 && 'Weak');

  return result;
};

const check4 = (pass) => {
  const result =
    pass.length < 7
      ? 'Weak'
      : pass.length === 7
      ? 'Strong'
      : pass !== pass.toLowerCase()
      ? 'Wery strong'
      : 'Strong';

  alert(result);
};

check1(pass);
check2(pass);
check3(pass);
check4(pass);
