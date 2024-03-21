const inputs = document.querySelectorAll('input');
const form = document.getElementById('form');

function isFormValid() {
  return Array.from(inputs).every((input) => input.value.length === 1);
}

for (let j = 0; j < inputs.length; j++) {
  inputs[j].addEventListener('input', (event) => {
    if (event.target.value.length >= 1 && j < inputs.length - 1) {
      inputs[j + 1].focus();
    }
  });

  inputs[j].addEventListener('paste', (event) => {
    event.preventDefault();

    const pastedData = (event.clipboardData || window.clipboardData).getData(
      'text'
    );

    const pastedChars = pastedData.split('');

    for (let i = 0; i < pastedChars.length; i++) {
      if (j + i < inputs.length) {
        inputs[j + i].value = pastedChars[i];
      }
    }

    if (j + pastedChars.length < inputs.length) {
      inputs[j + pastedChars.length].focus();
    }
  });
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  isFormValid()
    ? console.log('Form submitted!')
    : alert('Please fill in all fields.');
});
