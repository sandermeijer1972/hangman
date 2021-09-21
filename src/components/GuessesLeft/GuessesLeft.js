import React from "react";

const GuessesLeft = props => (
  <p className="lives">
    Je mag nog {props.maxGuesses - props.wrongLetters.length} foute letters geven
  </p>
);

export default GuessesLeft;
