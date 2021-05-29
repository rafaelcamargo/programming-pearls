const NON_WORDS = require('./constants/non-words');

const _public = {};

_public.countWordsOccurrence = text => {
  const initialTime = getCurrentTime();
  const words = {};
  text.split(' ').forEach(word => {
    const parsedWord = parseWord(word);
    if(!NON_WORDS.includes(parsedWord)) {
      words[parsedWord] = words[parsedWord] ? words[parsedWord] + 1 : 1;
    }
  });
  console.log(JSON.stringify(words, null, 2));
  console.log(`Processed in ${getCurrentTime() - initialTime}ms`);
  return words;
};

function parseWord(word){
  return word.replace('.', '')
    .replace(',', '')
    .replace(':', '')
    .replace('\n', '');
}

function getCurrentTime(){
  const date = new Date();
  return date.getTime();
}

module.exports = _public;
