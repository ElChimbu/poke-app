import React from 'react'

export const PokemonModal = ({label}) => {
    return (
        <div className="h-24 w-9/12 bg-gray-400 text-center font-bold pt-8 rounded-lg mt-8">
                <p>
                    {label}
                </p>
        </div>
    )
}
