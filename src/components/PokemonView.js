import React from 'react'
import { PokemonLabel } from './PokemonLabel';
import { PokemonResult } from './PokemonResult';
import { PokemonModal } from './PokemonModal';
import { label } from './label';

export const PokemonView = ({pokemon}) =>{
        //si el valor es true entonces devolvera el resultado de busqueda
        if(pokemon.result === true){
            return <div>
            <PokemonLabel name={pokemon.pokemon}/>
            <PokemonResult name={pokemon.data.name} img={pokemon.data.sprites.front_default}/>
            </div>
        }else if(pokemon.result === false){
        //si no lo es, entonces devolvera un error
            return <div>
            <PokemonLabel name={pokemon.pokemon}/>
            <PokemonModal label={label.error_case}/>
            </div>
        }
        //Si el modal aun no ha sido seteado permanecera como string vacio
        else if(pokemon.result === ''){
            return <PokemonModal label={label.default_case}/>
        }
    }