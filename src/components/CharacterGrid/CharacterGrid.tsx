import { SimpleGrid, Text } from "@chakra-ui/react";
import useCharacters from "../../hooks/useCharacter/useCharacter";
import CharacterCard from "../CharacterCard/CharacterCard";

const CharacterGrid = () => {
  const { characters, error } = useCharacters();

  // Filtering characters that are not female
  const filteredCharacters = characters.filter(
    (character) => character.gender !== "Female"
  );

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} padding='10px' spacing={10}>
        {filteredCharacters.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default CharacterGrid;
