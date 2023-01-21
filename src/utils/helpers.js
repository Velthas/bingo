// Currently used to shuffle the cards on Bingo Card mount
// Randomizes cards so that no two players get the same experience
const shuffleArray = (array) => {
  return array
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
};

export { shuffleArray };
