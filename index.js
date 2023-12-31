import { languages } from "./data/languages.js";

import {
  render,
  h,
} from "https://cdn.skypack.dev/pin/preact@v10.11.3-Ugxe7epKPQZ3xKBVvZAs/mode=imports,min/optimized/preact.js";
import {
  useState,
  useEffect,
  useRef,
} from "https://cdn.skypack.dev/pin/preact@v10.11.3-Ugxe7epKPQZ3xKBVvZAs/mode=imports,min/optimized/preact/hooks.js";
import htm from "https://cdn.skypack.dev/pin/htm@v3.1.1-pWM29AHF3JmwKPnFwyeP/mode=imports,min/optimized/htm.js";
import FuzzySearch from "https://cdn.skypack.dev/pin/fuzzy-search@v3.2.1-XCeru1oqt2I8w5bXfvOK/mode=imports,min/optimized/fuzzy-search.js";

import { Home } from "./components/Home.js";
import { Flashcard } from "./components/Flashcard.js";
import { HomeButton } from "./components/HomeButton.js";
import { SearchButton } from "./components/SearchButton.js";
import { TestButton } from "./components/TestButton.js";
import { LetterButtons } from "./components/LetterButtons.js";
import { SearchModal } from "./components/SearchModal.js";

export const searcher = new FuzzySearch(
  Object.entries(languages).map(([id, val]) => ({ id, ...val })),
  ["id", "spokenIn", "translations.thankYou.literal"],
  {
    caseSensitive: false,
    sort: true,
  }
);

export const html = htm.bind(h);

const standaloneOnIos =
  window.matchMedia("(display-mode: standalone)").matches &&
  !!navigator.platform.match(/iPhone|iPod|iPad/);

const App = () => {
  const [letter, setLetter] = useState("homepage");
  const ref = useRef();
  const main = useRef();

  const [search, setSearch] = useState({
    term: undefined,
    results: searcher.search(""),
  });

  const [testMode, setTestMode] = useState(false);
  const [reveal, setReveal] = useState(false);

  useEffect(() => {
    if (ref.current) {
      ref.current.onscroll = function () {
        let current = [];
        document.querySelectorAll("[data-letter]").forEach((el) => {
          const child = el.getBoundingClientRect();
          current.push([child.top, el]);
        });
        current = [...current].sort(([a], [b]) => Math.abs(a) - Math.abs(b))[0];

        const language = current[1].querySelector("h2")?.innerText;
        const letter = language[0];
        setLetter(letter);

        location.hash = language;

        if (ref.current.scrollTop === 0 && letter !== "homepage") {
          setLetter("homepage");
          location.hash = "";
        }
      };
    }
  }, [ref]);

  useEffect(() => {
    const el = document.querySelector(`[data-letter-button="${letter}"]`);
    const orientation =
      window.innerWidth > window.innerHeight
        ? { direction: "offsetTop", side: "top", measure: "offsetWidth" }
        : {
            direction: "offsetLeft",
            side: "left",
            measure: "offsetHeight",
          };

    el?.parentElement?.scrollTo({
      [orientation.side]:
        el[orientation.direction] - el.parentElement[orientation.measure],
      behavior: "smooth",
    });
  }, [letter]);

  useEffect(() => {
    if (testMode && letter === "homepage") {
      const el = document.querySelector(`[data-letter="A"]`);
      el?.scrollIntoView();
    }
  }, [testMode]);

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(
        `[data-language="${decodeURI(location.hash.slice(1))}"]`
      );
      el?.scrollIntoView();
    }
  }, []);

  return html`
    <main
      ref=${main}
      class="h-screen max-h-[100dvh] flex flex-row-reverse portrait:flex-col"
    >
      <ul
        ref=${ref}
        class="snap-start h-full flex-1 overflow-y-scroll snap-y snap-mandatory divide-y"
      >
        <${Home} />
        ${[...Object.keys(languages).sort()].map(
          Flashcard(testMode, reveal, setReveal, setSearch)
        )}
      </ul>
      <footer
        class="${standaloneOnIos
          ? `landscape:border-r portrait:border-t pb-3`
          : "landscape:border-r portrait:border-t"}"
      >
        <div class="h-full p-4 flex landscape:flex-col gap-3 overflow-x-scroll">
          <${HomeButton} />
          <${SearchButton} search=${search} setSearch=${setSearch} />
          <${TestButton} testMode=${testMode} setTestMode=${setTestMode} />
          <${LetterButtons} letter=${letter} setLetter=${setLetter} />
        </div>
      </footer>
      <${SearchModal}
        search=${search}
        setSearch=${setSearch}
        setLetter=${setLetter}
        testMode=${testMode}
      />
    </main>
  `;
};

render(html`<${App} />`, document.body);
