import React from "react";

function Status(props) {
  return (
    <section
      className={
        props.gameWon
          ? "game-status won"
          : props.gameOver
            ? "game-status lost"
            : props.showMessage
              ? "game-status firewall"
              : "game-status"
      }
    >
      {props.gameOver && (
        <>
          <h2>Game Over</h2>
          <p>You lose! Better start learning Assembly😭</p>
        </>
      )}
      {props.gameWon && (
        <>
          <h2>You win!</h2>
          <p>Well done! 🎉</p>
        </>
      )}

      {props.showMessage && !props.gameOver && !props.gameWon && (
        <>
          <p>
            {props.getFarewellText(
              props.languages[props.wrongLetters.length - 1].name,
            )}
          </p>
        </>
      )}
    </section>
  );
}

export default Status;
