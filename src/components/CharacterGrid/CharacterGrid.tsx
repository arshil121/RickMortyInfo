import { SimpleGrid, Text } from "@chakra-ui/react";
import useCharacters from "../../hooks/useCharacter/useCharacter";
import CharacterCard from "../CharacterCard/CharacterCard";
import CharacterCardSkeleton from "../CharacterCardSkeleton/CharacterCardSkeleton";
import CharacterCardContainer from "../CharacterCardContainer/CharacterCardContainer";
import { Episodes } from "../../hooks/useEpisode/useEpisode";

interface Props {
  selectedEpisode: Episodes | null;
}

const CharacterGrid = ({ selectedEpisode }: Props) => {
  const { data, error, isLoading } = useCharacters();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];
  

  const filteredCharacters = selectedEpisode
    ? data.filter((character) => selectedEpisode.characters.includes(character.url))
    : data;

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        spacing={6}
        marginRight="1.5%"
        marginLeft="-2%"
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <CharacterCardContainer key={skeleton}>
              <CharacterCardSkeleton />
            </CharacterCardContainer>
          ))}

        {filteredCharacters.map((character) => ( 
          <CharacterCardContainer key={character.id}>
            <CharacterCard character={character} />
          </CharacterCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default CharacterGrid;
