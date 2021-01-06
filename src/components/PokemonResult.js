import React from 'react'

export const PokemonResult = ({name, img}) => {
    return (
        <li className="justify-center list-none w-60 h-auto bg-gray-400 border-gray-900 border-solid 
                        border-2 mt-4 p-4 text-center rounded-md">
            <p className="text-3xl">{name}</p>
            <img src={img} className="h-56 w-56" alt={name}></img>
        </li>
    )
}
