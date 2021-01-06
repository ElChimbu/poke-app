import React from 'react'
import { PokemonLabel } from './PokemonLabel';
import { PokemonResult } from './PokemonResult';
import { PokemonModal } from './PokemonModal';
import { label } from './label';

export const PokemonView = ({pokemon}) =>{
        if(pokemon.result === true){
            return <div>
            <PokemonLabel name={pokemon.pokemon}/>
            <PokemonResult name={pokemon.data.name} img={pokemon.data.sprites.front_default}/>
            </div>
        }else if(pokemon.result === false){
            return <div>
            <PokemonLabel name={pokemon.pokemon}/>
            <PokemonModal label={label.error_case}/>
            </div>
        }else if(pokemon.result === ''){
            return <PokemonModal label={label.default_case}/>
        }
    }