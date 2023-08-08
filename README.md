# Dankon

> Learn to express your gratitude in 140+ different languages

A web app that teaches you how to say "thank you" in (almost) every language with flashcards detailing the literal translation, pronunciation and countries that the language is spoken in. This list of languages was initially curated from [wikipedia](https://en.wikipedia.org/wiki/List_of_official_languages_by_country_and_territory), translated by [ChatGPT](https://chat.openai.com), pronunciations were then populated by [GitHub Co-pilot](https://github.com/features/copilot). Words are spoken out using the [Web Speech API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API) where available.

- 🗺 Flashcards for over 140 languages spoken in 217 countries
- 💬 Includes literal translations and phonetic pronunciation
- 🔈 Listen to the word spoken in the closest available speech synthesizer
- 🧩 Test mode with press to reveal to re-enforce learning
- 📲 Add to your home screen for a native app-like experience

## Contributing

Due to the complex and nuanced nature of human language, there are bound to be inaccuracies in the both the translations and pronunciations. There may also be some languages missing or some that are not spoken in the countries listed.

Other than written inaccuracies there are also some limitations when it comes to the speech synthesis. The Web Speech API is not supported in all browsers and even when it is, the available voices are device dependant and so the quality of the speech synthesizer varies greatly.

So if you are a native speaker of any of the listed languages (or another that is not listed) and find anything that could be improved, or is willing to provide an audio file with them saying thank you in a particular language, then please [open an issue](https://github.com/lukejacksonn/dankon/issues) or submit a [pull request](https://github.com/lukejacksonn/dankon/pulls).

## Development

The app depends on [preact](https://github.com/preactjs/preact), [htm](https://github.com/developit/htm), [twind](https://github.com/tw-in-js/twind) and [fuzzy-search](https://github.com/wouterrutgers/fuzzy-search). All component parts are exported as es-modules; no build step. Data is stored in JSON format that is fetched at render time. The app is deployed to GitHub pages using GitHub actions.
