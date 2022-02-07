import { useEffect, useState } from "react";

export default function CharacterTile(props) {
  const [animation, setAnimation] = useState("");
  const [color, setColor] = useState("");
  const animate = props.animate;
  const animationDelay = props.animationDelay;
  const miniature = props.miniature;
  const borderColor = props?.tile ? " border-stone-400" : " border-stone-600";
  const tileStyle =
    " border-2 flex items-center justify-center \
  font-bold dark:text-white ";
  const tileSize = miniature ? " h-8 w-8 text-lg " : " h-16 w-16 text-4xl ";
  useEffect(() => {
    animate &&
      setTimeout(() => {
        setColor(props.color);
        setAnimation(" animate-flip-char");
      }, animationDelay);
  }, [animate, props.color]);

  return (
    <div className={color + tileStyle + tileSize + borderColor + animation}>
      {props?.tile}
    </div>
  );
}
