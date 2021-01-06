export const initialState = {data: [], pokemon: '', result: '', isLoading: false};

export function reducer(state, action) {
  switch (action.type) {
    case 'loading':
      return {...state, isLoading: true}
    case 'success':
      return {data: action.payload.req, 
              pokemon: action.payload.name.pokemonName, 
              result: true,
              isLoading: false
            };
    case 'failed':
      return {...state, 
              pokemon:action.payload.pokemonName, 
              result: false,
              isLoading: false};
    default:
      throw new Error();
  }
}