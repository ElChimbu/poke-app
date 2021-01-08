import React from 'react'

export const PokemonLabel = ({name}) => {
    return (
        <div className="mb-6">
        <p className="text-2xl">Resultados para:
          <span className="font-bold"> {name}</span>
        </p>
        </div>
    )
}
