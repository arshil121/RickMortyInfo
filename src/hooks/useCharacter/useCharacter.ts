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

const useCharacters = (pageNumber: number) => {
  const { data, error, isLoading } = useData<Character>(
    `/character/?page=${pageNumber}`
  );

  return { data, error, isLoading };
};

export default useCharacters;
