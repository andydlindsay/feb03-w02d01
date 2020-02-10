const assertEqual = (a, b) => {
  if (a === b) {
    console.log('they match');
  } else {
    console.log('don\'t match');
  }
};

module.exports = assertEqual;
// module.exports = 'export a string';
// module.exports = {
//   assertEqual: assertEqual,
//   str: 'export a string'
// };
// module.exports.assertEqual = assertEqual;

// runner
const name = 'Andy';
console.log(name);
