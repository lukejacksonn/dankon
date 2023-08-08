import { html } from "../index.js";
import { languages } from "../data/languages.js";

export const Home = () => {
  return html`
    <header
      class="relative snap-start h-full flex flex-col overflow-hidden"
      id="homepage"
      key="homepage"
    >
      <div
        class="relative flex flex-col items-center m-auto text-center p-10 gap-4"
      >
        <svg
          class="w-36 text-black"
          viewBox="0 0 20 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.9668 18.1797C2.25684 18.1797 2.52051 18.083 2.87207 17.8809L7.14355 15.5781L11.8018 18.1885C12.1709 18.3906 12.5576 18.4873 12.9355 18.4873C13.3047 18.4873 13.665 18.3994 13.9902 18.2061L18.3584 15.7451C18.9648 15.4023 19.2285 14.9189 19.2285 14.251V2.44727C19.2285 1.7002 18.7803 1.25195 18.042 1.25195C17.752 1.25195 17.4883 1.36621 17.1279 1.55957L12.6982 4.02051L8.09277 1.24316C7.75879 1.0498 7.39844 0.953125 7.0293 0.953125C6.66895 0.953125 6.30859 1.04102 5.99219 1.22559L1.65039 3.69531C1.04395 4.03809 0.771484 4.50391 0.771484 5.17188V16.9932C0.771484 17.7402 1.21973 18.1797 1.9668 18.1797ZM6.35254 14.0049L2.74023 15.9912C2.67871 16.0176 2.62598 16.0439 2.58203 16.0439C2.47656 16.0439 2.42383 15.9648 2.42383 15.8418V5.62891C2.42383 5.38281 2.51172 5.22461 2.74023 5.09277L6.0625 3.16797C6.15918 3.10645 6.24707 3.0625 6.35254 3.00977V14.0049ZM8.02246 14.0488V3.2207C8.11035 3.26465 8.20703 3.31738 8.29492 3.37012L11.9775 5.59375V16.2637C11.8633 16.2021 11.749 16.1406 11.626 16.0703L8.02246 14.0488ZM13.6562 16.3867V5.42676L17.2686 3.45801C17.3125 3.43164 17.3652 3.41406 17.4092 3.41406C17.5146 3.41406 17.585 3.49316 17.585 3.60742V13.7676C17.585 14.0225 17.4971 14.1807 17.2598 14.3125L14.0605 16.167C13.9287 16.2461 13.7881 16.3252 13.6562 16.3867Z"
            fill="#1C1C1E"
          />
        </svg>
        <h1 class="font-bold text-6xl">Dankon</h1>
        <p class="font-light text-lg sm:text-xl max-w-[30ch] opacity-80">
          Learn to express your gratitude in<br />
          ${Object.keys(languages).length}${" "} different languages
        </p>
      </div>
    </header>
  `;
};
