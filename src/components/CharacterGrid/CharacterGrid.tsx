import { useEffect, useState } from "react";
import { Text} from "@chakra-ui/react";
import apiClient from "../../services/api-client/api-client";

interface Character {
  id: number;
  name: string;
}

interface FetchCharacterResponse {
  count: number;
  results: Character[];
}

const CharacterGrid = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient
      .get<FetchCharacterResponse>("/character")
      .then((res) => setCharacters(res.data.results))
      .catch((err) => setError(err.message));
  }, []);

  return (
    <>
    {error && <Text>{error}</Text>}
      <ul>
        {characters.map((character) => (
          <li key={character.id}>{character.name}</li>
        ))}
      </ul>
    </>
  );
};

export default CharacterGrid;
