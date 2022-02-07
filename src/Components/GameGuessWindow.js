import { useCallback } from "react";
import { useEffect, useState } from "react/cjs/react.development";
import Word from "./Word";

const NUM_GUESSES = 6;
const NUM_CHARACTERS = 5;

export default function GameGuessWindow({
  gameRunning,
  word,
  keyboardMap,
  handleGameFinishsedEvent,
  handleGuessEvent,
}) {
  const [wordArray, setWordArray] = useState(Array(NUM_GUESSES).fill(Word));
  const [guess, setGuess] = useState("");
  const [animate, setAnimate] = useState(-1);
  const [guessArray, setGuessArray] = useState(
    Array(NUM_GUESSES).fill(Array(NUM_CHARACTERS).fill(""))
  );
  const [currentGuessingWord, setCurrentGuessingWord] = useState(0);

  const handleGuess = useCallback(
    (guess) => {
      handleGuessEvent(guess);
      if (guess === word)
        handleGameFinishsedEvent(true, currentGuessingWord + 1);
      else if (currentGuessingWord === NUM_GUESSES - 1)
        handleGameFinishsedEvent(false);
    },
    [word, handleGameFinishsedEvent, currentGuessingWord, handleGuessEvent]
  );

  const handleKeyDown = useCallback(
    (e) => {
      const key = e.key;
      if (!gameRunning) return;

      if (key === "Enter") {
        if (guess.length !== NUM_CHARACTERS) {
          console.log("Guess too short");
          // TODO:: Let user know he needs a full word
          return;
        }
        setGuessArray((formerGuessArray) =>
          formerGuessArray.map((formerGuess, idx) => {
            if (idx === currentGuessingWord) return guess.split("");
            return formerGuess;
          })
        );
        setAnimate(currentGuessingWord);
        handleGuess(guess);
        setGuess("");
        setCurrentGuessingWord((idx) => idx + 1);
      } else if (key === "Backspace") {
        setGuess((guess) => guess.substring(0, guess.length - 1));
      } else if (!Object.keys(keyboardMap).includes(key)) return;
      else if (guess.length < NUM_CHARACTERS) {
        setGuess((guess) => guess + "" + key);
      }
    },
    [currentGuessingWord, gameRunning, guess, handleGuess, keyboardMap]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);

    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);
  return (
    <div className="w-max grid grid-rows-auto gap-y-2">
      {wordArray.map((WordComponent, idx) => (
        <WordComponent
          key={`word-${idx}`}
          id={idx}
          word={word}
          finished={idx < currentGuessingWord}
          animate={idx === animate}
          guessArray={idx === currentGuessingWord ? guess : guessArray[idx]}
        />
      ))}
    </div>
  );
}
