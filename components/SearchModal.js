import { html, searcher } from "../index.js";

export const SearchModal = ({ search, setSearch, setLetter, testMode }) => {
  return html`
    <dialog
      open=${search.term !== undefined}
      class=${search.term !== undefined
        ? "fixed inset-0 p-[5vmin] w-full h-full bg-white/80"
        : "hidden"}
    >
      <div
        class="bg-neutral-100 border max-w-screen-sm h-full flex flex-col mx-auto rounded-xl shadow-xl"
      >
        <div class="flex flex-col relative min-h-0 h-full w-full">
          <div class="relative flex items-center w-full p-4">
            <input
              class="w-full text-lg border border-neutral-300 px-4 py-3 pb-3.5 rounded-md placeholder-neutral-400 pr-12"
              type="text"
              placeholder="Search Dankon..."
              value=${search.term}
              oninput=${(e) => {
                setSearch({
                  term: e.target.value,
                  results: searcher.search(e.target.value),
                });
              }}
            />
            <svg
              class="absolute right-6 w-8 text-neutral-400 fill-current"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.5322 19.0332C13.9297 19.0332 15.2393 18.6113 16.3291 17.8906L20.1787 21.749C20.4336 21.9951 20.7588 22.1182 21.1104 22.1182C21.8398 22.1182 22.376 21.5469 22.376 20.8262C22.376 20.4922 22.2617 20.167 22.0156 19.9209L18.1924 16.0801C18.9834 14.9551 19.4492 13.5928 19.4492 12.1162C19.4492 8.31055 16.3379 5.19922 12.5322 5.19922C8.73535 5.19922 5.61523 8.31055 5.61523 12.1162C5.61523 15.9219 8.72656 19.0332 12.5322 19.0332ZM12.5322 17.1875C9.74609 17.1875 7.46094 14.9023 7.46094 12.1162C7.46094 9.33008 9.74609 7.04492 12.5322 7.04492C15.3184 7.04492 17.6035 9.33008 17.6035 12.1162C17.6035 14.9023 15.3184 17.1875 12.5322 17.1875Z"
              />
            </svg>
          </div>
          <ul
            class="flex-1 divide-y overflow-y-auto py-[1vmin] bg-white rounded-xl border"
          >
            ${[...search.results]
              .sort((x, y) =>
                (
                  search.term
                    ? x.id.toLowerCase().match(search.term?.toLowerCase())
                    : x.id < y.id
                )
                  ? -1
                  : 1
              )
              .map((result) => {
                const showMaxspokenIn = 10;
                return html`
                  <li
                    class="py-3.5 px-5 grid gap-1"
                    onclick=${() => {
                      setLetter(result.id[0]);
                      const el = document.querySelector(
                        `[data-language="${result.id}"]`
                      );
                      el?.scrollIntoView();
                      setSearch({ term: undefined, results: search.results });
                    }}
                  >
                    <div class="flex w-full justify-between items-start">
                      <h2 class="text-lg leading-tight">${result.id}</h2>
                      <h3 class="text-xs text-neutral-500">
                        ${testMode
                          ? "•".repeat(
                              result.translations.thankYou.literal.length
                            )
                          : result.translations.thankYou.literal}
                      </h3>
                    </div>
                    <p class="text-xs font-light text-neutral-500">
                      Spoken in${" "}
                      ${[
                        ...result.spokenIn,
                        // .filter((x) =>
                        //   x.match(new RegExp(`${search.term}`, "i"))
                        // ),
                      ]
                        .slice(0, showMaxspokenIn)
                        .join(", ")}${result.spokenIn.length >
                        showMaxspokenIn &&
                      `
                and ${result.spokenIn.length - showMaxspokenIn} other
                  countries
              `}
                    </p>
                  </li>
                `;
              })}
          </ul>
          <div class="p-4">
            <button
              class="w-full text-black py-3 border border-neutral-300 bg-white rounded-xl text-sm uppercase text-neutral-400 font-bold tracking-wider"
              onclick=${() => {
                setSearch({ term: undefined, results: search.results });
              }}
            >
              <span>Close Search</span>
            </button>
          </div>
        </div>
      </div>
    </dialog>
  `;
};
