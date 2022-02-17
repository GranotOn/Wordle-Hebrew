import words from "./words.json";

function reverseWord(word) {
  return word.split("").reverse().join("");
}

export function getWord() {
  return reverseWord(words[Math.floor(Math.random() * words.length)]);
}

export function isWord(speculatedWord) {
  return !!words.find((word) => word === reverseWord(speculatedWord));
}
