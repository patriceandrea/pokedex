import React from "react";
import { AppBar, Toolbar, Grid, Card, CardMedia, CardContent } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles'
import mockData from "./mockData";
import { useState } from "react";
import { CircularProgress } from "material-ui";

const useStyles = makeStyles({
  pokedexContainer: {
    paddingTop: '20px',
    paddingLeft: '50px',
    paddingRight: '50px'
  }
})

const Pokedex = () => {
  const classes = useStyles();
  const [pokemonData, setPokemonData] = useState(mockData);
  const { id, name } = pokemonData[pokemonId];

  const getPokemonCard = (pokemonId) => {
    console.log(pokemonData[`${pokemonId}`])
    return (
      <Grid item xs={4} sm={4} key={pokemonId}>
        <Card>
          <CardContent>HI</CardContent>
        </Card>
      </Grid>
    )
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar />
      </AppBar>
      {pokemonData ? (
        <Grid container spacing={2} className={classes.pokedexContainer}>
          {Object.keys(pokemonData).map((pokemonId) =>
            getPokemonCard(pokemonId)
          )}
        </Grid>
      ) : (
        <CircularProgress />
      )}

    </>
  )
}

export default Pokedex;