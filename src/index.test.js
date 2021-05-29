const fs = require('fs');
const path = require('path');
const frequentlyUsedWordsSevice = require('.');

describe('Frequently Used Words', () => {
  it('should return the number of word ocurrences in a given text', () => {
    const TEXT_MOCK = fs.readFileSync(path.join(__dirname, './mocks/text.txt'), 'utf-8');
    expect(frequentlyUsedWordsSevice.countWordsOccurrence(TEXT_MOCK)).toEqual({
      Imagine: 1,
      Olympics: 1,
      where: 1,
      you: 1,
      have: 1,
      three: 1,
      winners: 1,
      race: 1,
      standing: 1,
      podium: 1,
      gold: 1,
      silver: 1,
      bronze: 1
    });
  });
});
