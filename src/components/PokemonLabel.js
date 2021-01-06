import React from 'react'

export const PokemonLabel = ({name}) => {
    return (
        <div>
        <p className=" text-2xl">Resultados para:
          <span className="font-bold"> {name}</span>
        </p>
        </div>
    )
}
