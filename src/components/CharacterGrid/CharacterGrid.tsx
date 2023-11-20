import { SimpleGrid, Skeleton, Text } from "@chakra-ui/react";
import useCharacters from "../../hooks/useCharacter/useCharacter";
import CharacterCard from "../CharacterCard/CharacterCard";
import CharacterCardSkeleton from "../CharacterCardSkeleton/CharacterCardSkeleton";
import CharacterCardContainer from "../CharacterCardContainer/CharacterCardContainer";

const CharacterGrid = () => {
  const { characters, error, isLoading } = useCharacters();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

  // // Filtering characters that are not female
  // const filteredCharacters = characters.filter(
  //   (character) => character.gender !== "Female"
  // );

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        padding="10px"
        spacing={10}
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <CharacterCardContainer key={skeleton}>
              <CharacterCardSkeleton />
            </CharacterCardContainer>
          ))}

        {characters.map((character) => (
          <CharacterCardContainer key={character.id}>
            <CharacterCard character={character} />
          </CharacterCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default CharacterGrid;
