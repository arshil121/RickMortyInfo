import useData from "../useData/useData";

export interface Character {
  gender: string;
  id: number;
  name: string;
  image: string;
  species: string;
  status: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  url: string;
}

const useCharacters = () => useData<Character>("/character");

export default useCharacters;
