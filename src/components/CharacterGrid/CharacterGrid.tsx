import { Button, SimpleGrid, Text } from "@chakra-ui/react";
import useCharacters from "../../hooks/useCharacter/useCharacter";
import CharacterCard from "../CharacterCard/CharacterCard";
import CharacterCardSkeleton from "../CharacterCardSkeleton/CharacterCardSkeleton";
import CharacterCardContainer from "../CharacterCardContainer/CharacterCardContainer";
import { Episodes } from "../../hooks/useEpisode/useEpisode";
import { useState } from "react";

interface Props {
  selectedEpisode: Episodes | null;
}

const CharacterGrid = ({ selectedEpisode }: Props) => {
  const [pageNumber, setPageNumber] = useState(1);
  const { data, error, isLoading } = useCharacters(pageNumber);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

  const filteredCharacters = selectedEpisode
    ? data.filter((character) =>
        selectedEpisode.characters.includes(character.url)
      )
    : data;

  // Function to handle next page
  const nextPage = () => {
    setPageNumber((prevPageNumber) => prevPageNumber + 1);
  };

  // Function to handle previous page
  const prevPage = () => {
    if (pageNumber > 1) {
      setPageNumber((prevPageNumber) => prevPageNumber - 1);
    }
  };

  return (
    <>
      {error && <Text>{error}</Text>}
      <Button onClick={prevPage}>Previous Page</Button>
      <Button onClick={nextPage}>Next Page</Button>
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        spacing={6}
        marginRight={5}
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
