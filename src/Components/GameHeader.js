import Text from "./Text";

export default function GameHeader() {
  return (
    <div className="w-full flex justify-between">
      <div>?</div>
      <div>
        <Text className="text-4xl font-medium">מיל-יום</Text>
      </div>
      <div>x y</div>
    </div>
  );
}
