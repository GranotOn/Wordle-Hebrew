import { useEffect } from "react";
import Text from "./Text";
import Word from "./Word";

const modalClasses =
  "bg-gray-200 border-2 border-neutral-200 rounded-lg \
  dark:border-gray-400 dark:bg-neutral-900 \
  col-span-2 col-start-3 row-span-4 row-start-2 h-full w-full \
  p-2 \
  animate-bump-to-view";

export default function Modal({ setIsModal }) {
  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === "Escape") setIsModal(false);
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [setIsModal]);

  const showcase0GuessArray = "מוחלש".split("");
  const showcase1GuessArray = "פרווה".split("");
  const word0 = "מתתתת";
  const word1 = "כברבב";

  return (
    <div className="z-50 w-screen h-screen fixed justify-center items-center grid grid-cols-6 grid-rows-6">
      <div className={modalClasses}>
        <Text>נחש את המילה היומית בעד שישה ניחושים.</Text>
        <div className="my-2"></div>
        <Text>כל ניחוש צריך להיות מילה חוקית בת 5 אותיות.</Text>
        <div className="my-2"></div>
        <Text>
          לאחר כל ניחוש, כל אות תקבל צבע שיעזור לך להבין כמה הניחוש היה קרוב.
        </Text>
        <hr className="w-11/12 mx-auto my-4 border-gray-400" />
        <Text className={"font-bold text-lg"}>דוגמאות</Text>
        <div className="mb-4"></div>
        <div className="w-1/12">
          <Word
            id="showcase-0"
            guessArray={showcase0GuessArray}
            word={word0}
            finished={true}
            animate={true}
            miniature={true}
          />
        </div>
        <Text className={"mt-2"}>האות ׳מ׳ נמצאת במילה ובמקום הנכון.</Text>
        <div className="mb-6"></div>
        <div className="w-1/12">
          <Word
            id="showcase-1"
            guessArray={showcase1GuessArray}
            word={word1}
            finished={true}
            animate={true}
            miniature={true}
          />
        </div>
        <Text className={"mt-2"}>האות ׳ר׳ נמצאת במילה אבל לא במקום הנכון.</Text>
        <hr className="w-11/12 mx-auto my-4 border-gray-400" />
        <Text>מילה חדשה תהיה זמינה כל יום!</Text>
      </div>
    </div>
  );
}
