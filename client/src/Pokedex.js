import React from "react";
import { AppBar, Toolbar, Grid, Card, CardMedia, CardContent, Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles'
import mockData from "./mockData";
import { useState } from "react";
import { CircularProgress } from "material-ui";

const useStyles = makeStyles({
  pokedexContainer: {
    paddingTop: '20px',
    paddingLeft: '50px',
    paddingRight: '50px'
  },
  cardMedia: {
    margin: 'auto'
  },
  cardContent: {
    textAlign: "center",
  }
})

const toFirstCharUppercase = (name) => {
  return name.charAt(0).toUpperCase() + name.slice(1);
};

const Pokedex = (pokemonId) => {
  const classes = useStyles();
  const [pokemonData, setPokemonData] = useState(mockData);


  const getPokemonCard = (pokemonId) => {
    const { id, name } = pokemonData[`${pokemonId}`];
    const sprite = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

    return (
      <Grid item xs={4} sm={4} key={pokemonId}>
        <Card>
          <CardMedia
            className={classes.CardMedia}
            image={sprite}
            style={{ widht: "130px", height: "130px" }}
          />
          <CardContent className={classes.cardContent}>
            <Typography>{`${id}. ${toFirstCharUppercase(name)}`}</Typography>
          </CardContent>
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