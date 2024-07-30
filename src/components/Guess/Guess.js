import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Guess({ value, answer }) {
  const result = checkGuess(value, answer);
  const letterClass = result ? result.map((item, index) => item.status) : "";

  return (
    <p className="guess">
      {range(5).map((num) => (
        <span
          className={`cell ${letterClass[num] ? letterClass[num] : ""}`}
          key={num}
        >
          {value ? value[num] : undefined}
        </span>
      ))}
    </p>
  );
}

export default Guess;
