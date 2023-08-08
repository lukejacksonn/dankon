import { html, searcher } from "../index.js";
import { languages } from "../data/languages.js";
import { flags } from "../data/countries.js";

export const Flashcard =
  (testMode, reveal, setReveal, setSearch) => (language) => {
    const literal = languages[language].translations.thankYou.literal;
    const pronunciation =
      languages[language].translations.thankYou.pronunciation;
    const spoken = languages[language].translations.thankYou.spoken;
    const spokenIn = languages[language].spokenIn;
    const voice = languages[language].voice;
    const showMaxspokenIn = 5;

    return html`
      <li
        data-letter=${language[0]}
        data-language=${language}
        onTouchStart=${() => testMode && setReveal(true)}
        onTouchEnd=${() => testMode && setReveal(false)}
        onMouseDown=${() => testMode && setReveal(true)}
        onMouseUp=${() => testMode && setReveal(false)}
        class="relative snap-center block h-full bg-white flex flex-col py-8 px-6 ${testMode &&
        "select-none"}"
        onContextMenu=${(e) => {
          if (testMode) e.preventDefault();
        }}
      >
        <a href="#${language}" class="absolute top-0 left-0 w-full h-full"></a>
        <div class="h-full flex flex-col text-center">
          <h2 class="text-xl font-medium text-black/80">${language}</h2>
          <div class="my-auto flex flex-col items-center">
            <h3
              class=${literal.length > 12 || language === "Japanese"
                ? "font-bold mb-[0.5vw] text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
                : "font-bold mb-[1vw] text-4xl sm:text-5xl md:text-6xl lg:text-7xl"}
            >
              ${testMode && !reveal ? "•".repeat(literal.length) : literal}
            </h3>
            <div class="w-auto flex items-center gap-2">
              <h4
                class="${testMode && !reveal
                  ? `text-sm font-bold text-black/50 select-none`
                  : `font-light`}"
              >
                ${testMode && !reveal
                  ? "PRESS TO REVEAL"
                  : `(${pronunciation})`}
              </h4>
              ${!testMode &&
              html`<button
                onClick=${() => {
                  const utterThis = new SpeechSynthesisUtterance(
                    spoken || literal
                  );
                  utterThis.lang = voice;
                  utterThis.pitch = 1;
                  utterThis.rate = 1;
                  window.speechSynthesis.speak(utterThis);
                }}
              >
                <svg
                  class="w-5 h-5 opacity-50 hover:opacity-80"
                  viewBox="0 0 22 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.4111 16.5381C11.0703 16.5381 11.5537 16.0459 11.5537 15.3955V1.97461C11.5537 1.31543 11.0703 0.788086 10.3936 0.788086C9.94531 0.788086 9.62891 0.981445 9.14551 1.43848L5.47168 4.875C5.41895 4.92773 5.34863 4.9541 5.26953 4.9541H2.78223C1.48145 4.9541 0.77832 5.6748 0.77832 7.03711V10.3066C0.77832 11.6689 1.48145 12.3896 2.78223 12.3896H5.26953C5.34863 12.3896 5.41016 12.416 5.47168 12.4688L9.14551 15.9316C9.58496 16.3535 9.9541 16.5381 10.4111 16.5381ZM18.2246 14.9297C18.6289 15.1758 19.1211 15.0879 19.4023 14.6748C20.5449 13.0576 21.2129 10.8867 21.2129 8.6543C21.2129 6.42188 20.5537 4.24219 19.4023 2.63379C19.1211 2.2207 18.6289 2.12402 18.2246 2.37891C17.8027 2.64258 17.7412 3.16992 18.0576 3.63574C18.9893 5.00684 19.5254 6.79102 19.5254 8.6543C19.5254 10.5088 18.9805 12.293 18.0576 13.6729C17.75 14.1387 17.8027 14.6572 18.2246 14.9297ZM14.6914 12.5742C15.0693 12.8203 15.5615 12.7324 15.834 12.3457C16.5459 11.3965 16.9678 10.0518 16.9678 8.6543C16.9678 7.25684 16.5459 5.9209 15.834 4.96289C15.5615 4.57617 15.0693 4.48828 14.6914 4.74316C14.2607 5.02441 14.1729 5.54297 14.5244 6.05273C15.0078 6.74707 15.2803 7.67871 15.2803 8.6543C15.2803 9.62988 14.999 10.5527 14.5244 11.2559C14.1816 11.7656 14.2607 12.2842 14.6914 12.5742Z"
                    fill="#1C1C1E"
                  />
                </svg>
              </button>`}
            </div>
          </div>
          <h5
            class="mx-auto px-12 uppercase text-xs border-b pb-2 mb-3 text-black/30 tracking-wider font-medium select-none"
          >
            Spoken In
          </h5>
          <p
            class="text-xs max-w-screen-sm mx-auto leading-relaxed flex flex-wrap gap-2 justify-center items-center"
          >
            ${spokenIn.slice(0, showMaxspokenIn).map(
              (x) =>
                html`
                  <button
                    class="flex gap-1 border py-0.5 pl-1.5 pr-2 rounded-full"
                    onclick=${() => {
                      setSearch({
                        term: x,
                        results: searcher.search(x),
                      });
                    }}
                  >
                    ${flags[x]}
                    <span class="opacity-60">${x}</span>
                  </button>
                `
            )}${spokenIn.length > showMaxspokenIn &&
            html`
              <span
                class="border py-0.5 px-2 text-black/60 rounded-full"
                onclick=${() => {
                  setSearch({
                    term: language,
                    results: searcher.search(language),
                  });
                }}
              >
                + ${spokenIn.length - showMaxspokenIn} more countries
              </span>
            `}
          </p>
        </div>
      </li>
    `;
  };
