import axios from 'axios';

export const getPokemon = (prop) =>{
    return axios.get(`http://localhost:4000/${prop}`)
}