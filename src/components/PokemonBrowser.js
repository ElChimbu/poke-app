import React, {useReducer, useEffect, useState, useRef} from 'react'
import { useForm } from 'react-hook-form'
import { getPokemon, getForm } from '../services/Pokemon.Service';
import { initialState, reducer } from './../reducer/index';
import { PokemonView } from './PokemonView';
import Progress from './Progress';

export const PokemonBrowser = () =>{

    //Aclaracion: Se uso el package solamente para usarlo de ejemplo.
    //En una aplicacion real si el input es tan basico optariamos por usar una configuracion vanilla
    const { register, handleSubmit } = useForm();

    //Segun la accion que haga el usuario entonces se va a mostrar una vista
    const [pokemon, dispatch] = useReducer(reducer, initialState);

    //Muestra o oculta el modal de autocompletado
    const [display, setDisplay] = useState(false)

    //Array con 20 pokemons para luego realizar el autocompletado
    const [options, setOptions] = useState([])

    //Cuando el imput cambie, hara set de su estado y luego filtrara el contenido del input con las opciones del array de busqueda
    const [search, setSearch] = useState("");

    //Captura los eventos del mouse, se usara mas abajo para cambiar el estado de display
    const wrapperRef = useRef(null)

    useEffect(()=>{
    setOptions(getForm())
    
    document.addEventListener('mousedown', handleClickOutside)
     return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])

    //Maneja el estado de Set display para ocultar las opciones cuando el mouse haga click fuera
    const handleClickOutside = event =>{
        const {current: wrap} = wrapperRef;
        if(wrap && !wrap.contains(event.target)){
            setDisplay(false)
        }
    }

    //Al dar click en la opcion, autocompleta el input y oculta el modal
    const setPokeDex = poke =>{
        setSearch(poke)
        setDisplay(false)
    }

    const onSubmit = (res) =>{
        dispatch({type: 'loading'})
        let PokemonName = res.pokemonName.toLowerCase()
        getPokemon(PokemonName)
        .then(response => dispatch({type: 'success', payload: {req: response.data, name: res}}))
        .then(() => setSearch(""))
        .catch(() => dispatch({type:'failed', payload: res }))
    }

    return(
        <div ref={wrapperRef} className="mt-4">
            <form onSubmit={handleSubmit(onSubmit)}>
                <input 
                name='pokemonName'
                ref={register} 
                placeholder="ingrese el nombre a buscar" 
                className="w-2/3 p-2 rounded-md border-2 border-solid border-gray-900"
                required={true}
                onClick={() => setDisplay(!display)}
                autoComplete="off"
                onChange={(event)=> setSearch(event.target.value)}
                value={search}
                />
                <button
                className="w-1/5 ml-2 rounded-md border-2 border-solid p-2 border-gray-900 bg-gray-400"
                >
                    Buscar
                </button>
            </form>
                    {display && (
                        <div className="fixed h-auto max-h-40 overflow-y-scroll w-50">
                            {options
                            .filter((name) => name.indexOf(search.toLocaleLowerCase()) > -1 )
                            .map((v, i) =>{
                                return <li 
                                        onClick={() => setPokeDex(v)}
                                        key={i}
                                        className="p-2 list-none border-b-2 border-black border-solid h-10 text-lg bg-gray-600">
                                    <p>{v}</p>
                                </li>
                            })}
                        </div>
                    )}
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
