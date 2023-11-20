import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar/NavBar";
import CharacterGrid from "./components/CharacterGrid/CharacterGrid";
import EpisodeList from "./components/EpisodeList/EpisodeList";
import { Episodes } from "./hooks/useEpisode/useEpisode";
import { useState } from "react";

const App = () => {
  const [selectedEpisode, setSelectedEpisode] = useState<Episodes | null>(null);
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
        templateColumns={
          {
            base: '1fr',
            lg: '10 % 1fr'
          }
        }
      >
        <GridItem area="nav">
          <NavBar />
        </GridItem>

        <Show above="lg">
          <GridItem area="aside" padding={5}>
            <EpisodeList onSelectEpisode={(episode) => setSelectedEpisode(episode)}/>
          </GridItem>
        </Show>

        <GridItem area="main">
        <CharacterGrid selectedEpisode={selectedEpisode} />
        </GridItem>
      </Grid>
    </>
  );
};

export default App;
