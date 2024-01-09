# Pokédexercise

A simple Pokédex used for searching any current Pokémon supported by the `PokéApi/v2`. 

This exercise was scaffolded using `create-react-app` using it's `--template redux-typescript` option to install all needed dependencies, and was styled using `styled-components`.

To run this project locally you must:
1. `npm i` or `npm install`  to install all needed dependencies
2. After installation, `npm start` in the terminal and hit enter, if all dependencies installed correctly, then the project should compile with no issues. (maybe a warning here or there due to dependency issues)

# Observations

~1. Evolution line turned out to be a bit more complex than I'd initially thought since there's no straightforward way of getting to it, and it required a recursive function (as far as I saw) to get the information to a useable level with my adapters.~

2. Speaking of the adapters -- as they are a *critical* point of functionality between the app and the api, they need to be exhaustively tested, the interfaces do a lot of the heavy lifting by forcing the input and output to match what's expected, but some unit tests covering different types of input would be ideal.

3. For the api calls, though it works relatively well because they are pretty quick and don't fetch *too* much data, I would use Redux Sagas for the side-effects and to do multiple calls in a chain and not show results until all of the data that's required is loaded in; I noticed this a bit too late and doubled down on the Thunks since I felt the deadline creeping up on me and used some workarounds.

4. For scaling and longer term development, I would switch up the structure a bit and be more strict with where I would place my strictly "dumb" or styled components so as to only pass primitive props to them, so far, only the `HistoryPokemonCard` component completely obeys this rule.

5. Last but not least is sanitizing the search input, though relatively harmless in this app, it should be done because it's good practice.