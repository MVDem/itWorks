const tellFortune = ({ jobTitle, location, partnerName, numberOfChildren }) => {
  const str = `You will be a ${jobTitle} in ${location} married to ${partnerName} with ${numberOfChildren} children`;
  return str;
};

const parameters = {
  jobTitle: 'programmer',
  location: 'New York',
  partnerName: 'Rana',
  numberOfChildren: 2,
};

console.log(tellFortune(parameters));
