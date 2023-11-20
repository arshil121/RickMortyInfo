import { Button } from "@chakra-ui/react";
import useEpisode, { Episodes } from "../../hooks/useEpisode/useEpisode";

interface Props {
  onSelectEpisode: (episodes: Episodes) => void;
}

const EpisodeList = ({ onSelectEpisode }: Props) => {
  const { data } = useEpisode();

  return (
    <div>
      {data.map((episode) => (
        <div key={episode.id} style={{ marginBottom: "10px" }} >
          <Button
            onClick={() => onSelectEpisode(episode)}
            variant="outline"
            fontSize="sm"
          >
            {episode.episode}
          </Button>
        </div>
      ))}
    </div>
  );
};

export default EpisodeList;
