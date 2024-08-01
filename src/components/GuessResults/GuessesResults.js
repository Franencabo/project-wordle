import React from "react";
import Guess from "../Guess/Guess";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { range } from "../../utils";
import Banner from "../Banner/Banner";

function Guesses({ guesses, answer }) {
  console.log(answer);

  return (
    <div className="guess-results">
      {/* <Banner /> */}
      {range(NUM_OF_GUESSES_ALLOWED).map((num) => (
        <Guess key={num} value={guesses[num]} answer={answer} />
      ))}
    </div>
  );
}

export default Guesses;
