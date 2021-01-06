import React, {useReducer} from 'react'
import { useForm } from 'react-hook-form'
import { getPokemon } from '../services/Pokemon.Service';
import { initialState, reducer } from './../reducer/index';
import { PokemonView } from './PokemonView';
import Progress from './Progress';

export const PokemonBrowser = () =>{
    const { register, handleSubmit, reset } = useForm();
    const [pokemon, dispatch] = useReducer(reducer, initialState);

    const onSubmit = (res) =>{
        dispatch({type: 'loading'})
        let PokemonName = res.pokemonName.toLowerCase()
        getPokemon(PokemonName)
        .then(response => dispatch({type: 'success', payload: {req: response.data, name: res}}))
        .catch(() => dispatch({type:'failed', payload: res }))
        reset()
    }

    return(
        <div className="mt-4">
            <form onSubmit={handleSubmit(onSubmit)}>
                <input 
                name='pokemonName'
                ref={register} 
                placeholder="ingrese el nombre a buscar" 
                className="w-2/3 p-2 rounded-md border-2 border-solid border-gray-900"
                required={true}
                />
                <button
                className="w-1/5 ml-2 rounded-md border-2 border-solid p-2 border-gray-900 bg-gray-400"
                >
                    Buscar
                </button>
            </form>
            <div>
                { pokemon.isLoading ?
                <Progress/>
                :
                <PokemonView pokemon={pokemon}/>
            }
            </div>
        </div>
    )
}
