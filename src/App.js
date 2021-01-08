import React from 'react'
import {PokemonBrowser} from './components/PokemonBrowser';

function App() {
  return (
    <div className="App w-1/2 m-auto">
      <header className="h-24 mt-4">
        <h1 className="font-bold text-5xl">
          Pokemon finder
        </h1>
        <p className="mt-3 text-gray-700">
          El que quiere Pokemons, que los busque
        </p>
      </header>
      <article className="">
        <PokemonBrowser/>      
      </article>
      <footer className="fixed bottom-0">
      <div className="w-full mt-6 h-1 bg-gray-400"/>
        <div className="flex mt-6 space-x-52">
          <p className="text-lg  mb-4">
            Creado por Jeremias Gauna
          </p>
          <nav>
          <a href="https://github.com/ElChimbu/poke-app" 
             target="_blank" 
             rel="noreferrer" 
             className=" w-44 mb-6 ml-2 text-center rounded-md border-2 border-solid p-2 border-gray-900 bg-gray-400">
            frontEnd
          </a>
          <a href="https://github.com/ElChimbu/poke-api" 
             target="_blank" 
             rel="noreferrer" 
             className=" w-44 mb-6 ml-2 text-center rounded-md border-2 border-solid p-2 border-gray-900 bg-gray-400">
            backEnd
          </a>
          </nav>
        </div>
      </footer>
    </div>
  );
}

export default App;
