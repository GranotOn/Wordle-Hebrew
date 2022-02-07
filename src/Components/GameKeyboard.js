import KeyboardTile from "./KeyboardTile";

export default function GameKeyboard({ keyboardMap }) {
  return (
    <div className="grid w-max grid-cols-6 sm:grid-cols-9 gap-x-1 gap-y-2">
      {Object.keys(keyboardMap).map((key) => (
        <KeyboardTile key={key} keyName={key} status={keyboardMap[key]} />
      ))}
    </div>
  );
}
