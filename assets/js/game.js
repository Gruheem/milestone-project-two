// Variables
// create board as javascript array
let boardArray = [];
// for selectCard function
var cardOne;
var cardTwo;
// for game stats
let errors = 0;
let moves = 0;
let startTime;
let timerInterval;
let finalTime;
// for update() function
let matchedPairs = 0;
// for modal
const modal = document.getElementById("myModal");
//for difficulty setting
let difficulty;
// HTML elements
const board = document.getElementById("game-board");
const game = document.getElementById("game");
const home = document.getElementById("home");
const errorBox = document.getElementById("errors");
const movesBox = document.getElementById("moves");
const timeBox = document.getElementById("time");

// Start game button event listeners
document.getElementById("easyBtn").addEventListener("click", () => {
  // start easy game
  difficulty = [4, 2];
  board.classList.remove("columns-2", "columns-4", "columns-8");
  board.classList.add("columns-2");
  startGame();
});

document.getElementById("mediumBtn").addEventListener("click", () => {
  // start medium game
  difficulty = [4, 4];
  board.classList.remove("columns-2", "columns-4", "columns-8");
  board.classList.add("columns-4");
  startGame();
});

document.getElementById("hardBtn").addEventListener("click", () => {
  // start hard game
  difficulty = [4, 8];
  board.classList.remove("columns-2", "columns-4", "columns-8");
  board.classList.add("columns-8");
  startGame();
});

// game board restart and difficulty select buttons
document.getElementById("selectDifficulty").addEventListener("click", () => {
  game.classList.add("hidden");
  home.classList.remove("hidden");
});

document.getElementById("restartGame").addEventListener("click", () => {
  stopTimer();
  startGame();
});

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
  // resets game variables
  errors = 0;
  moves = 0;
  matchedPairs = 0;

  // resets stats display
  timeBox.innerText = "00:00";
  errorBox.innerText = errors;
  movesBox.innerText = moves;

  // bring up game board and hide home screen
  home.classList.add("hidden");
  game.classList.remove("hidden");

  createGameArray().then((gameArray) => {
    // sets size of board based on difficulty
    let rows = difficulty[0];
    let cols = difficulty[1];

    // clears boardArray for Javascript game array
    boardArray = [];

    // create board as DOM Element
    board.innerHTML = "";

    // the card factory
    for (let r = 0; r < rows; r++) {
      let row = [];
      for (let c = 0; c < cols; c++) {
        let cardImg = gameArray.pop();
        row.push(cardImg);

        // create wrapper div for card
        const wrapper = document.createElement("div");
        wrapper.classList.add("card-wrapper");

        // create card img element
        const card = document.createElement("img");
        card.id = r.toString() + "-" + c.toString();
        card.src = cardImg.image;
        card.alt = cardImg.name;
        card.classList.add("card");
        card.addEventListener("click", selectCard); // calls function 'selectCard()' on click

        // append card to wrapper and wrapper to board
        wrapper.appendChild(card);
        board.appendChild(wrapper);
      }
      // console.log(row);
      boardArray.push(row); // Add to JS Array
    }
    // console.log(boardArray);
    // arrow syntax allows us to pass arguments after the delay
    setTimeout(() => {
      hideCards(rows, cols);
      startTimer();
    }, 1000);
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
      cardOne = this; // assign cardOne to an img element
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

// update moves, errors, and check for win condition
function update() {
  if (cardOne.src != cardTwo.src) {
    cardOne.src = "assets/images/pokeball.png";
    cardTwo.src = "assets/images/pokeball.png";
    errors++;
    errorBox.innerText = errors;
    moves++;
    movesBox.innerText = moves;
  } else if (cardOne.src === cardTwo.src) {
    moves++;
    movesBox.innerText = moves;
    matchedPairs++;
  }
  if (matchedPairs === (difficulty[0] * difficulty[1]) / 2) {
    stopTimer();
    displayModal();
  }

  cardOne = null; // reset so we can select more cards
  cardTwo = null;
}

// Timer Functions

function startTimer() {
  startTime = Date.now();
  timerInterval = setInterval(updateTimer, 1000);
}

function updateTimer() {
  const elapsedTime = Math.floor((Date.now() - startTime) / 1000); // gets the elapsed time in seconds
  const minutes = String(Math.floor(elapsedTime / 60)).padStart(2, "0"); // calculates minutes and pads with leading zero if needed
  const seconds = String(elapsedTime % 60).padStart(2, "0"); // calculates seconds by finding what is left over from minutes and pads with leading zero if needed
  timeBox.innerText = `${minutes}:${seconds}`;
}

function stopTimer() {
  clearInterval(timerInterval); // clears the interval to stop the timer
  finalTime = timeBox.innerText;
  timerInterval = null;
}

// Modal Functions and Event Listeners
document.getElementById("diffSelect").addEventListener("click", () => {
  closeModal();
  game.classList.add("hidden");
  home.classList.remove("hidden");
});

document.getElementById("reset").addEventListener("click", () => {
  startGame();
  closeModal();
});

document.getElementById("close").addEventListener("click", () => {
  closeModal();
});
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    closeModal();
  }
});
window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeModal();
  }
});

function displayModal() {
  document.getElementById("modalMoves").innerText = `${moves}`;
  document.getElementById("modalErrors").innerText = `${errors}`;
  document.getElementById("modalTime").innerText = `${finalTime}`;
  modal.classList.remove("hidden");
}

function closeModal() {
  modal.classList.add("hidden");
}

// startGame();
