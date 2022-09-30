import React from 'react'

const Pokemon = ({ match }) => {
  const { params } = match;
  const { pokemonId } = params;

  return (
    <div>
      {`This is a Pokemon page for pokemon #${pokemonId}`}
    </div>
  )
}

export default Pokemon;