export default function KeyboardTile({ keyName, status }) {
  const statusToBackgroundSwitch = {
    correct: "bg-green-600",
    "wrong place": "bg-yellow-600",
    wrong: "bg-gray-600",
  };
  const backgroundColor = statusToBackgroundSwitch[status];

  return (
    <div
      className={
        "flex items-center justify-center rounded-md text-white text-lg font-bold w-12 h-12  " +
        backgroundColor
      }
    >
      {keyName}
    </div>
  );
}
