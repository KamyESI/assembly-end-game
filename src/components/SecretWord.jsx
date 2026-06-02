import React from "react";

function SecretWord(props) {
  return (
    <section className="secret-word">
      {props.secretWord.split("").map((letter, index) => (
        <span key={index} className="secret-letter">
          {props.guessedLetters.includes(letter) || props.gameOver
            ? letter.toUpperCase()
            : ""}
        </span>
      ))}
    </section>
  );
}

export default SecretWord;
