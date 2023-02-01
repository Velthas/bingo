// Converts an index to X and Y of a 5x5 board
// Not necessary per se, but useful to reason about the position of tiles
//TODO: Just realized I inverted x and y here
const convertToCoord = (index) => {
  const y = index < 5 ? index : index % 5;
  const x = index < 5 ? 0 : Math.trunc(index / 5);
  return [x, y];
};

// Converts X and Y coordinate to the appropriate index of an array
const convertToTile = (x, y) => 5 * x + y;

// Checks all the tiles on the Y axis starting from the top
// If all 5 tiles in that column are hit, send back positive result
const checkVerticalBingo = (hitIndex, hits) => {
  const bingo = []; // Indexes of tiles will be stored here
  const [x, y] = convertToCoord(hitIndex);
  for (let i = 0; i < 5; i++) {
    const index = convertToTile(i, y);
    if (hits.includes(index)) bingo.push(index); //TODO: Includes is much more readable
    else break;
  } // If bingo array has 5 coordinates there is a vertical bingo.
  if (bingo.length === 5) return bingo; //TODO: No need to return an object here 
  else return false; //TODO: An array is truthy, false, well, falsy
};

// Gets leftmost tile of the row last hit was in
// Then keep moving to the right for 4 tiles and check for hits
// If all 5 tiles are hit, send back positive result
const checkHorizontalBingo = (hitIndex, hits) => {
  const bingo = [];
  const [x, y] = convertToCoord(hitIndex);
  for (let i = 0; i < 5; i++) {
    const index = convertToTile(x, i);
    if (hits.includes(index)) bingo.push(index);
    else break;
  }
  if (bingo.length === 5) return bingo
  return false;
};

// Feels like a very suboptimal implementation
// First, I check if last hit was on right or left diagonal
// Center is conveniently taken so non issue here
// After that, I check for hits on the diagonal that was hit
// If the hit wasn't on either diagonal, return false by default
const checkDiagonalBingo = (hitIndex, hits) => {
  const leftDiagonal = [0, 6, 18, 24];
  const rightDiagonal = [4, 8, 16, 20];
  const bingo = [];

  if (leftDiagonal.includes(hitIndex)) {
    for (let i = 0; i < 5; i++) {
      const index = convertToTile(i, i);
      if (hits.includes(index)) bingo.push(index);
      else break;
    }
    if (bingo.length === 5) return bingo;
  } else if (rightDiagonal.includes(hitIndex)) {
    let y = 0; // We start from the bottom left corner of the board
    for (let i = 4; i >= 0; i--) {
      const index = convertToTile(i, y);
      y += 1; // increases as i decreases
      if (hits.includes(index)) bingo.push(index);
      else break;
    }
    if (bingo.length === 5) return bingo;
  }
  return false;
};

export { checkDiagonalBingo, checkHorizontalBingo, checkVerticalBingo };
