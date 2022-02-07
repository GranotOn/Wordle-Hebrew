import GameHeader from "./GameHeader";
import GameGuessWindow from "./GameGuessWindow";
import GameKeyboard from "./GameKeyboard";
import { useState } from "react";

export default function MainGame() {
  const word = "שולחן";
  const [gameRunning, setGameRunning] = useState(true);
  const [keyboardMap, setKeyboardMap] = useState({
    א: "wrong",
    ב: "wrong",
    ג: "wrong",
    ד: "wrong",
    ה: "wrong",
    ו: "wrong",
    ז: "wrong",
    ח: "wrong",
    ט: "wrong",
    י: "wrong",
    כ: "wrong",
    ל: "wrong",
    מ: "wrong",
    נ: "wrong",
    ס: "wrong",
    ע: "wrong",
    פ: "wrong",
    צ: "wrong",
    ק: "wrong",
    ר: "wrong",
    ש: "wrong",
    ת: "wrong",
    ם: "wrong",
    ן: "wrong",
    ף: "wrong",
    ץ: "wrong",
  });

  function handleGuessEvent(guess) {
    const guessCharacterPlaceRepresentation = guess.split("").map((c, idx) => {
      if (c === word[idx]) return "correct";
      else if (word.split("").includes(c)) return "wrong place";
      return "wrong";
    });

    setKeyboardMap((formerKeyboardMap) => {
      let newKeyboardMap = {};
      Object.keys(formerKeyboardMap).forEach((char) => {
        const charIndexInGuess = guess.split("").findIndex((c) => c === char);
        if (charIndexInGuess === -1 || formerKeyboardMap[char] === "correct")
          newKeyboardMap[char] = formerKeyboardMap[char];
        else if (
          guessCharacterPlaceRepresentation[charIndexInGuess] === "correct"
        )
          newKeyboardMap[char] = "correct";
        else if (
          guessCharacterPlaceRepresentation[charIndexInGuess] === "wrong place"
        )
          newKeyboardMap[char] = "wrong place";
        else newKeyboardMap[char] = formerKeyboardMap[char];
      });
      return newKeyboardMap;
    });
  }

  function handleGameFinishsedEvent(isWin, totalNumGuesses) {
    if (isWin) console.log("Congrats", totalNumGuesses);
    else console.log("Loser wtf");

    setGameRunning(false);
  }

  return (
    <div className="w-screen h-screen bg-neutral-300 dark:bg-neutral-900 flex justify-center">
      <div className="h-full flex flex-col items-center w-full lg:w-4/12 p-1 gap-y-4">
        <GameHeader />
        <hr className="w-full mt-1 mb-5 border-black dark:border-white" />
        <GameGuessWindow
          word={word}
          gameRunning={gameRunning}
          keyboardMap={keyboardMap}
          handleGameFinishsedEvent={handleGameFinishsedEvent}
          handleGuessEvent={handleGuessEvent}
        />
        <GameKeyboard keyboardMap={keyboardMap} />
      </div>
    </div>
  );
}
