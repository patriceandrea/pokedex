import React, { useEffect } from 'react'
import { useState } from 'react';
import { Button, CircularProgress, Typography } from '@material-ui/core';
import { toFirstCharUppercase } from "./constants"
import { Link } from 'react-router-dom';
import axios from 'axios';

const Pokemon = ({ match, history }) => {
  const { params } = match;
  const { pokemonId } = params;
  const [pokemon, setPokemon] = useState(undefined);


  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
      .then(function (response) {
        const { data } = response;
        setPokemon(data);
      }

      )
  })

  const generatePokemonJSX = () => {
    const { name, id, species, height, weight, types, sprites } = pokemon;
    const { front_default, front_shiny } = sprites;

    return (
      <>
        <Typography variant="h1">
          {`${id}.`} {toFirstCharUppercase(name)}
          <img src={front_shiny} />
        </Typography>
        <img style={{ width: "300px", height: "300px" }} src={front_default} />
        <Typography variant="h3">Pokemon Info</Typography>
        <Typography>
          {"Species: "}
          <Link href={species.url}>{species.name}</Link>
        </Typography>
        <Typography>Height: {height} </Typography>
        <Typography>Weight: {weight} </Typography>
        <Typography variant="h6"> Types:</Typography>
        {
          types.map((typeInfo) => {
            const { type } = typeInfo;
            const { name } = type;
            return <Typography key={name}>{`${name}`}</Typography>
          })
        }
      </>
    )
  };


  return (
    <>
      {pokemon === undefined && <CircularProgress />}
      {pokemon != undefined && pokemon && generatePokemonJSX(pokemon)}
      {pokemon === false && <Typography> Pokemon Not Found </Typography>}
      {pokemon !== undefined &&
        <Button variant="contained" onClick={() => history.push("/")}>
          Back To Pokedex
        </Button>
      }
    </>
  )
}

export default Pokemon;