async function getPokemonData(id) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await response.json();
    // console.log(data);
    let pokemonData = {
        name: data.name,
        image: data.sprites.other["official-artwork"].front_default,
    };
    console.log("fetched pokemon:", pokemonData);
    return pokemonData;
}

getPokemonData(1)

// async function createPokemonArray() {
//     const pokemonArray = [];

// }