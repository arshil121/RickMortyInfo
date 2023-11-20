
import useData from "../useData/useData";

export interface Episodes {
  id: number;
  episode: string;
  name: string;
  characters: string[];
}

const useEpisode = () => useData<Episodes>('/episode')
export default useEpisode;
