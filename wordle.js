
// get list of all 5 letter words
const allWords = require('./words');
// has these letters
const hasLetters = ['e','s','i']; 
// must not has these letters
const mustNotHaveLetters = ['r', 'a','d','y','b','l','u','v'];
// must have selected letters in these positions
const mustHaveLettersInPosition = ['s','p','i',,'e']
// not in these positions
const mustNotHaveLettersInPosition = [,'e',,'c','s']

const containsLetter = (word, letter) => {
  return word.includes(letter);
}

const doesNotContainLetter = (word, letter) => {
  return !word.includes(letter);
}

const hasLetterInPosition = (word, letter, position) => {
  if (letter === undefined) return true;

  return word[position] === letter;
}

const filteredWords = allWords.filter(word => {
  return hasLetters.every(letter => containsLetter(word, letter)) &&
  mustNotHaveLetters.every(letter => doesNotContainLetter(word, letter)) &&
  mustHaveLettersInPosition.every((letter, index) => hasLetterInPosition(word, letter, index))
})

console.log(filteredWords);
console.log('possible words', filteredWords.length);