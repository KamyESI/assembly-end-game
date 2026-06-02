import React from "react";
import { useState } from "react";
import { languages } from "../language";
import { getFarewellText } from "../utils";
import Status from "./Status";
import LanguageList from "./LanguageList";
import SecretWord from "./SecretWord";
import Keyboard from "./Keyboard";
import { kidsWords } from "../words";
import Confetti from "react-confetti";

function MainComponent() {
  const [secretWord, setSecretWord] = useState(
    kidsWords[Math.floor(Math.random() * kidsWords.length)],
  );
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [showMessage, setShowMessage] = useState(false);
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  const gameWon = secretWord
    .split("")
    .every((letter) => guessedLetters.includes(letter));
  const gameOver = wrongLetters.length === languages.length - 1;

  function guessLetter(letter) {
    setShowMessage(false);
    if (secretWord.includes(letter) && !guessedLetters.includes(letter)) {
      setGuessedLetters((prevGuessed) => [...prevGuessed, letter]);
    } else if (!secretWord.includes(letter) && !wrongLetters.includes(letter)) {
      setWrongLetters((prevWrong) => [...prevWrong, letter]);
      setShowMessage(true);
    }
  }

  return (
    <main>
      {gameWon && (
        <Confetti width={window.innerWidth} height={window.innerHeight} />
      )}
      <Status
        gameWon={gameWon}
        gameOver={gameOver}
        showMessage={showMessage}
        setShowMessage={setShowMessage}
        getFarewellText={getFarewellText}
        wrongLetters={wrongLetters}
        languages={languages}
      />
      <LanguageList wrongLetters={wrongLetters} languages={languages} />
      <SecretWord
        secretWord={secretWord}
        guessedLetters={guessedLetters}
        gameOver={gameOver}
      />
      <Keyboard
        alphabet={alphabet}
        guessedLetters={guessedLetters}
        wrongLetters={wrongLetters}
        guessLetter={guessLetter}
        gameWon={gameWon}
        gameOver={gameOver}
      />

      {(gameOver || gameWon) && (
        <button
          className="new-game"
          onClick={() => {
            setSecretWord(
              kidsWords[Math.floor(Math.random() * kidsWords.length)],
            );
            setGuessedLetters([]);
            setWrongLetters([]);
            setShowMessage(false);
            setgameOver(false);
            setGameWon(false);
          }}
        >
          {gameOver ? "Game Over" : "You Win!"}
        </button>
      )}
    </main>
  );
}

export default MainComponent;
/* 14 h 33 min */
