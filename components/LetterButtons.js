import { html } from "../index.js";
import { languages } from "../data/languages.js";

export const LetterButtons = ({ letter, setLetter }) => {
  const firstLetters = [
    ...new Set(
      Object.keys(languages)
        .map((x) => x[0])
        .sort()
    ),
  ];

  return firstLetters.map(
    (x) =>
      html`
        <button
          data-letter-button=${x}
          class=${[
            "w-10 h-10 rounded-full border border-black flex-none tabular-nums text-black",
            x === letter
              ? "font-bold bg-black text-white scale-110 border-transparent"
              : "font-normal",
          ].join(" ")}
          onclick=${() => {
            setLetter(x);
            const el = document.querySelector(`[data-letter="${x}"]`);
            el?.scrollIntoView();
          }}
        >
          ${x}
        </button>
      `
  );
};
