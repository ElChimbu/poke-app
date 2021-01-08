import axios from 'axios';

export const getPokemon = (prop) =>{
    return axios.get(`http://localhost:4000/${prop}`)
}

//Aclaracion: para maximizar los tiempos de respuesta decidi que esta consulta la haga directamente a la api principal
export const getForm = () =>{
    //Mapeamos el endpoint, y cada nombre lo guardamos en un array que luego sera retornado cuando la funcion sea llamada
    const pokemon = [];
        const promises = new Array(20)
        .fill()
        .map((v, i) => axios.get(`https://pokeapi.co/api/v2/pokemon-form/${i + 1}`));
    Promise.all(promises).then(pokemonArr => {
      return pokemonArr.map(value =>
        pokemon.push(value.data.name)
      );
    });
    return pokemon
}