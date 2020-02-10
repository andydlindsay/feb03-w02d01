const camelCase = (input) => {
  // return 'thisIsAString';
  const resultArray = [];
  const words = input.trim().toLowerCase().split(' ');
  resultArray.push(words[0]);
  for (let i = 1; i < words.length; i++) {
    const firstLetter = words[i][0].toUpperCase();
    const remainingLetters = words[i].slice(1);
    const fullWord = `${firstLetter}${remainingLetters}`;
    resultArray.push(fullWord);
  }
  return resultArray.join('');
};

module.exports = camelCase;
