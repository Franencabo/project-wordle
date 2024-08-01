import React from "react";

function GuessInput({ gameStatus, handleSubmitGuess }) {
  const [tentativeGuess, setTentativeGuess] = React.useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    handleSubmitGuess(tentativeGuess);
    setTentativeGuess("");
  };

  return (
    <form className="guess-input-wrapper" onClick={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        required
        disabled={gameStatus !== "playing"}
        id="guess-input"
        type="text"
        minLength={5}
        maxLength={5}
        pattern="[a-zA-Z]{5}"
        title="Enter a 5-letter word."
        name="guess-input"
        value={tentativeGuess}
        onChange={(event) => {
          const nextGuess = event.target.value.toUpperCase();
          setTentativeGuess(nextGuess);
        }}
      />
    </form>
  );
}

export default GuessInput;
