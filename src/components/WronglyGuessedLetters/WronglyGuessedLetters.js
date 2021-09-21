import React from "react";

const WronglyGuessedLetters = props => (
  <div style={{display: props.wrongLetters.length < 1 && "none" }}>
    <p>foute letters:</p>
    <p className="fout">{props.wrongLetters.join(" ")}</p>
  </div>
);

export default WronglyGuessedLetters;
