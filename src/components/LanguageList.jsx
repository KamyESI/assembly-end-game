import React from "react";

function LanguageList(props) {
  return (
    <section className="language-list">
      {props.languages.map((language, index) => (
        <span
          key={index}
          className={
            props.wrongLetters.length > index
              ? "language-item wrong"
              : "language-item"
          }
          style={{
            backgroundColor: language.backgroundColor,
            color: language.color,
          }}
        >
          {language.name}
        </span>
      ))}
    </section>
  );
}

export default LanguageList;
