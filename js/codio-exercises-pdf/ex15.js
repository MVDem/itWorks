const language = prompt('enter a language');

const languageCheck = (language) => {
  switch (language) {
    case 'mandarin':
      alert('MOST number of native speakers!');
      breack;
    case 'Spanish':
      alert('2nd place in a number of native speakers');
      breack;
    case 'English':
      alert('3rd place');
      breack;
    case 'Hindi':
      alert('Number 4');
      breack;
    case 'Arabic':
      alert('5th most spoken language');
      breack;
    default:
      alert('MOST number of native speakers!');
      breack;
  }
};

languageCheck(language);
