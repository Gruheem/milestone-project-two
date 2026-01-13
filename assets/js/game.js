// Start game button event listeners
let difficulty;
document.getElementById("easyBtn").addEventListener("click", () => {
  // start easy game
  difficulty = [4, 2];
  document.getElementById("game-board").classList.add("columns-2");
  startGame();
});

document.getElementById("mediumBtn").addEventListener("click", () => {
  // start medium game
  difficulty = [4, 4];
  document.getElementById("game-board").classList.add("columns-4");
  startGame();
});

document.getElementById("hardBtn").addEventListener("click", () => {
  // start hard game
  difficulty = [4, 8];
  document.getElementById("game-board").classList.add("columns-8");
  startGame();
});

let boardArray = []; // create board as javascript array
var cardOne; // for selectCard function
var cardTwo;
let errors = 0;
let moves = 0;
// let cardCount = 0;
let matchedPairs = 0;
var modal = document.getElementById("myModal");
let span = document.getElementsByClassName("close")[0];


// console.log("difficulty set to:" difficulty);

async function getPokemonData(id) {
  // fetches pokemon data from pokeapi
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
  // creates array of pokemon objects based on difficulty setting
  const pokemonArray = [];
  let cardCount = (difficulty[0] * difficulty[1]) / 2;
  for (let i = 1; i <= cardCount; i++) {
    const pokemon = await getPokemonData(Math.ceil(Math.random() * 151));
    pokemonArray.push(pokemon);
  }
  // console.log("pokemon array:", pokemonArray);

  const gameArray = pokemonArray.concat(pokemonArray);
  // console.log("game array:", gameArray);

  shuffle(gameArray);
  // console.log("game array:", gameArray);

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
  document.getElementById("errors").innerText = errors;

  document.getElementById("home").classList.add("hidden");
  document.getElementById("game").classList.remove("hidden");

  createGameArray().then((gameArray) => {
    let rows = difficulty[0];
    let cols = difficulty[1];
    boardArray = [];

    const board = document.getElementById("game-board"); // create board as DOM Element
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
        card.addEventListener("click", selectCard); // calls function 'selectCard()' on click
        board.appendChild(card); // Add to DOM to appear to be there
      }
      // console.log(row);
      boardArray.push(row); // Add to JS Array to be interacted with later
    }
    // console.log(boardArray);
    setTimeout(() => hideCards(rows, cols), 2000); // arrow syntax allows us to pass paramiters after the delay
  });
}

function hideCards(rows, cols) {
  // Hides all Pokemon in their pokeballs
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      let card = document.getElementById(r.toString() + "-" + c.toString());
      card.src = "assets/images/pokeball.png";
    }
  }
}

function selectCard() {
  if (this.src.includes("pokeball")) {
    if (!cardOne) {
      cardOne = this; // assign cardOne to an img element we created earlier
      // console.log(cardOne);

      let imageLocation = cardOne.id.split("-"); // turns id into coordinates for boardArray
      // console.log(imageLocation);
      let r = imageLocation[0];
      let c = imageLocation[1];

      cardOne.src = boardArray[r][c].image; // retrieves image from boardArray using coordinates from the id
    } else if (!cardTwo && this != cardOne) {
      cardTwo = this;
      // console.log(cardTwo);

      let imageLocation = cardTwo.id.split("-"); // turns id into coordinates for boardArray
      // console.log(imageLocation);
      let r = imageLocation[0];
      let c = imageLocation[1];

      cardTwo.src = boardArray[r][c].image;
      setTimeout(update, 1000); //no parameters to pass the update function so no arrow syntax
    }
  }
}

function update() {
  if (cardOne.src != cardTwo.src) {
    cardOne.src = "assets/images/pokeball.png";
    cardTwo.src = "assets/images/pokeball.png";
    errors++;
    document.getElementById("errors").innerText = errors;
    moves++;
    document.getElementById("moves").innerText = moves;
  } else if (cardOne.src === cardTwo.src) {
    moves++;
    document.getElementById("moves").innerText = moves;
    matchedPairs++;
  }
  if (matchedPairs === (difficulty[0] * difficulty[1]) / 2) {
    displayModal();
  }
  
  cardOne = null; // reset so we can select more cards
  cardTwo = null;
}

function displayModal() {
  document.getElementById("myModal").classList.remove("hidden");
  span.onclick = function () {
    // Closes the modal on clicking [X]
    modal.style.display = "none";
  };
  window.onclick = function (event) {
    // Closes the modal clicking out of it
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
}
// startGame();
