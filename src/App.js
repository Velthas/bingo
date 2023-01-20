import React, { useState } from "react";
import BingoCard from "./components/bingocard/BingoCard";

function App() {
  const [bingo, setBingo] = useState([]); // Will be a matrix where each array contains bingo hits
  
  //Use this function to ensure all bingos are up to date
  const validateBingos = (hits) => {
    if (bingo.length < 0) return;
    const updatedArray = bingo.filter((combination) => {
      let counter = 0;
      let allTilesHit = false;
      for (let i = 0; i < combination.length; i++) {
        if (hits.indexOf(combination[i]) !== -1) counter++;
        if (counter === 5) allTilesHit = true;
      }
      return allTilesHit;
      });
    setBingo(updatedArray);
  };

  return (
    <div className="App">
      <BingoCard
        validateBingos={validateBingos}
        bingo={bingo}
        setBingo={setBingo}
      />
    </div>
  );
}

export default App;
