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

async function createPokemonArray() {
    const pokemonArray = [];

    for (let i = 1; i <= 4; i++) { // true numnber to be taken from difficulty setting
        const pokemon = await getPokemonData(Math.ceil(Math.random() * 151));
        pokemonArray.push(pokemon);
    }
    console.log("pokemon Array:", pokemonArray);
    return pokemonArray;
}

createPokemonArray();