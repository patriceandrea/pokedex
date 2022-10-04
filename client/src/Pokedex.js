import React from "react";
import { AppBar, Toolbar, Grid, Card, CardMedia, CardContent, Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles'
import mockData from "./mockData";
import { useState, useEffect } from "react";
import { CircularProgress } from "material-ui";
import { toFirstCharUppercase } from "./constants";
import axios from 'axios';

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


const Pokedex = (props) => {
  const { history } = props;
  const classes = useStyles();
  const [pokemonData, setPokemonData] = useState({});

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon?limit=870`)
      .then(function (response) {
        const { data } = response;
        const { results } = data;
        const newPokemonData = {};
      })
      ;
  }, []);


  const getPokemonCard = (pokemonId) => {
    const { id, name } = pokemonData[`${pokemonId}`];
    const sprite = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

    return (
      <Grid item xs={4} sm={4} key={pokemonId}>
        <Card onClick={() => history.push(`/${pokemonId}`)}>
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