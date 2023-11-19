import { useEffect, useState } from "react";
import apiClient from "../../services/api-client/api-client";
import { CanceledError } from "axios";

interface Character {
  id: number;
  name: string;
}

interface FetchCharacterResponse {
  count: number;
  results: Character[];
}

const useCharacters = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    apiClient
      .get<FetchCharacterResponse>("/character", { signal: controller.signal })
      .then((res) => setCharacters(res.data.results))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });

    return () => controller.abort();
  }, []);

  return { characters, error };
};

export default useCharacters;
