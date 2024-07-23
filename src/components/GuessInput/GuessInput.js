import React from "react";

function GuessInput() {
  const [guess, setGuess] = React.useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ guess });
  };
  return (
    <form className="guess-input-wrapper" onClick={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        minLength={5}
        maxLength={5}
        pattern="[a-zA-Z]{5}"
        name="guess-input"
        value={guess}
        onChange={(event) => {
          const nextGuess = event.target.value;
          setGuess(nextGuess);
        }}
      />
    </form>
  );
}

export default GuessInput;
