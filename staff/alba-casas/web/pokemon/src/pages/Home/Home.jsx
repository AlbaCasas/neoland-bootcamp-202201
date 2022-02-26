import React, { useEffect, useState } from "react";
import Card from "../../components/Card";
import Sidebar from "../../components/Sidebar/Sidebar";
import { retrieveAllPokemon } from "../../logic";
import { Grid, Layout, Main } from "./styled";

const Home = () => {
  const [pokemonList, setPokemonList] = useState();
  console.log(pokemonList);

  useEffect(() => {
    // retrieveAllPokemon(0, 6) -> con paginación: offset 0, quantity 6 (desde el 0, pinta los prox 6)
    retrieveAllPokemon()
      .then((pokemon) => {
        setPokemonList(pokemon.results);
      })
      .catch(({ message }) => {
        alert(message);
      });
  }, []);

  return (
    <Layout>
      <Sidebar setPokemonList={setPokemonList} />
      <Main>
        <Grid>
          {/* Si pokemonList contiene map (en su prototipado), hace el map (Optional Chaining) */}
          {pokemonList?.map((pokemon) => {
            return <Card pokemonName={pokemon.name} key={pokemon.name} />;
          })}
        </Grid>
      </Main>
    </Layout>
  );
};

export default Home;