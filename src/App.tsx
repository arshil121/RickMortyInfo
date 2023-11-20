import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar/NavBar";
import CharacterGrid from "./components/CharacterGrid/CharacterGrid";
import EpisodeList from "./components/EpisodeList/EpisodeList";

const App = () => {
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
      >
        <GridItem area="nav">
          <NavBar />
        </GridItem>

        <Show above="lg">
          <GridItem area="aside">
            <EpisodeList />
          </GridItem>
        </Show>

        <GridItem area="main">
          <CharacterGrid />
        </GridItem>
      </Grid>
    </>
  );
};

export default App;
