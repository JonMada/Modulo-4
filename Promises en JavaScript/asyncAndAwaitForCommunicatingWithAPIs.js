//¿Cómo conectarnos a varia APIs de manera simúltanea?
//https://pokeapi.co/api/v2/pokemon
//https://api.github.com/users/jordanhudgens/repos

async function queryApis () {
    const reposPromise = fetch('https://api.github.com/users/jordanhudgens/repos');
    const repos = reposPromise.then(respueta => respueta.json());
    console.log(repos);

    const pokemonPromise = fetch('https://pokeapi.co/api/v2/pokemon');
    const pokemons = pokemonPromise.then(respueta => respueta.json());
    console.log(pokemons);
}

queryApis();