import React from "react";

function Keyboard(props) {
  return (
    <section className="keyboard">
      {props.alphabet.map((letter) => (
        <button
          key={letter}
          className="key-button"
          onClick={() => props.guessLetter(letter)}
          style={{
            backgroundColor: props.guessedLetters.includes(letter)
              ? "green"
              : props.wrongLetters.includes(letter)
                ? "red"
                : "rgb(207, 194, 10)",
          }}
          disabled={props.gameWon || props.gameOver}
        >
          {letter.toUpperCase()}
        </button>
      ))}
    </section>
  );
}

export default Keyboard;
