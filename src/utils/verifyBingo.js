const convertToCoord = (index) => {
  const y = index < 5 ? index : index % 5;
  const x = index < 5 ? 0 : Math.trunc(index / 5);
  return [x, y];
};

const convertToTile = (x, y) => 5 * x + y;

const checkVerticalBingo = (hitIndex, hits) => {
  let counter = 0;
  const bingo = [];
  const [x, y] = convertToCoord(hitIndex);
  for (let i = 0; i < 5; i++) {
    const index = convertToTile(i, y);
    if (hits.indexOf(index) !== -1) {
      counter += 1;
      bingo.push(index);
    } else break;
  }
  if (counter === 5) return { result: true, bingo };
  else return { result: false };
};

const checkHorizontalBingo = (hitIndex, hits) => {
  let counter = 0;
  const bingo = [];
  const [x, y] = convertToCoord(hitIndex);
  for (let i = 0; i < 5; i++) {
    const index = convertToTile(x, i);
    if (hits.indexOf(index) !== -1) {
      counter += 1;
      bingo.push(index);
    } else break;
  }
  if (counter === 5) return { result: true, bingo };
  else return { result: false };
};

const checkDiagonalBingo = (hitIndex, hits) => {
  const leftDiagonal = [0, 6, 18, 24];
  const rightDiagonal = [4, 8, 16, 20];
  const bingo = [];
  let counter = 0;

  if (leftDiagonal.indexOf(hitIndex) !== -1) {
    for (let i = 0; i < 5; i++) {
      const index = convertToTile(i, i);
      if (hits.indexOf(index) !== -1) {
        counter += 1;
        bingo.push(index);
      } else break;
    }
    if (counter === 5) return { result: true, bingo };
  } else if (rightDiagonal.indexOf(hitIndex) !== -1) {
    let y = 0;
    for (let i = 4; i >= 0; i--) {
      const index = convertToTile(i, y);
      y += 1;
      if (hits.indexOf(index) !== -1) {
        counter += 1;
        bingo.push(index);
      } else break;
    }
    if (counter === 5) return { result: true, bingo };
  }
  return { result: false };
};

export { checkDiagonalBingo, checkHorizontalBingo, checkVerticalBingo };
