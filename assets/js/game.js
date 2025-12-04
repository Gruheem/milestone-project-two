let difficultyChoice = "easy"; //btn.dataset.diff  Accessed from button click event listener
let difficulty; // create variable to be assigned later 
if (difficultyChoice === "easy") {
    difficulty = [4, 2];
} else if (difficultyChoice === "medium") {
    difficulty = [4, 4];
} else if (difficultyChoice === "hard") {
    difficulty = [4, 8];
}

console.log("difficulty set to:", difficultyChoice, difficulty);

async function getPokemonData(id) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const data = await response.json();
  // console.log(data);
  const pokemonData = {
    name: data.name,
    image: data.sprites.other["official-artwork"].front_default,
  };
  // console.log("fetched pokemon:", pokemonData);
  return pokemonData;
}

// getPokemonData(1)

async function createGameArray() {
  const pokemonArray = [];
  let cardCount = (difficulty[0] * difficulty[1]) / 2;
  for (let i = 1; i <= cardCount; i++) {
    // true numnber to be taken from difficulty setting
    const pokemon = await getPokemonData(Math.ceil(Math.random() * 151));
    pokemonArray.push(pokemon);
  }
  // console.log("pokemon array:", pokemonArray);

  const gameArray = pokemonArray.concat(pokemonArray);
  // console.log("game array:", gameArray);

  shuffle(gameArray);
  console.log("game array:", gameArray);

  return gameArray;
}

function shuffle(array) {
  // Fisher-Yates Shuffle
  for (let i = 0; i < array.length; i++) {
    let temp = array[i];
    let r = Math.floor(Math.random() * array.length);
    array[i] = array[r];
    array[r] = temp;
  }
}

// createGameArray();

function startGame() {

  createGameArray().then((gameArray) => {
    let rows = difficulty[0];
    let cols = difficulty[1];

    const board = document.getElementById("game-board");
    board.innerHTML = "";

    for (let r = 0; r < rows; r++) {
      let row = [];
      for (let c = 0; c < cols; c++) {
        let cardImg = gameArray.pop();
        row.push(cardImg);

        let card = document.createElement("img");
        card.id = r.toString() + "-" + c.toString();
        card.src = cardImg.image;
        card.alt = cardImg.name;
        card.classList.add("card");
        board.appendChild(card);
      }
    }
  });
}

startGame();
