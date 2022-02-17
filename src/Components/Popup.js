import { useEffect } from "react";
import Text from "./Text";

const popupClasss =
  "bg-gray-400 border-1 border-neutral-200 rounded-lg \
  dark:border-gray-400 dark:bg-gray-600 \
  opacity-80 \
  flex \
  h-max \
  p-4 mt-40 \
  animate-bump-to-view";

export default function Popup({
  state,
  toggleState,
  message,
  displayTime = 4000,
}) {
  useEffect(() => {
    if (state) {
      setTimeout(() => toggleState(), displayTime);
    }
  }, [state, toggleState]);

  if (!state) return <></>;

  return (
    <div className="absolute w-full h-full flex justify-center">
      <div className={popupClasss}>
        <Text className={"font-bold"}>{message}</Text>
      </div>
    </div>
  );
}
