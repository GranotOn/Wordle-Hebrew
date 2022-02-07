import CharacterTile from "./CharacterTile";

const NUM_CHARACTERS = 5;
const ANIMATION_DELAY = 200;
const CORRECT_CHAR_WRONG_PLACE = "bg-yellow-600";
const CORRECT_CHAR_CORRECT_PLACE = "bg-green-600";
const NULL_OR_WRONG = "";

export default function Word(props) {
  const id = props.id;
  const guessArray = props.guessArray;
  const word = props.word;
  const animate = props.animate;
  const finished = props.finished;
  const miniature = props.miniature || false;

  let charArray = Array(NUM_CHARACTERS).fill(CharacterTile);

  let charColorArray = (function (charArray, word) {
    let colorArray = Array(charArray.length)
      .fill(NULL_OR_WRONG)
      .map((_, idx) => {
        const alreadySawThisChar = guessArray
          .slice(0, idx)
          .includes(guessArray[idx]);

        if (!finished || alreadySawThisChar) return NULL_OR_WRONG;
        if (guessArray[idx] === word[idx]) return CORRECT_CHAR_CORRECT_PLACE;
        if (word.split("").includes(guessArray[idx]))
          return CORRECT_CHAR_WRONG_PLACE;
        return NULL_OR_WRONG;
      });

    return colorArray;
  })(charArray, word);

  const getAnimateDelay = (index) => (index + 1) * ANIMATION_DELAY;

  return (
    <div className="w-full grid grid-cols-auto grid-flow-col gap-1">
      {charArray.map((CharacterTileComponent, idx) => (
        <CharacterTileComponent
          key={`word-${id}-char-${idx}`}
          tile={guessArray[idx]}
          color={charColorArray[idx]}
          animate={animate}
          animationDelay={getAnimateDelay(idx)}
          miniature={miniature}
        />
      ))}
    </div>
  );
}
