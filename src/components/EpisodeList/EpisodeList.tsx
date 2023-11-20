import React from "react";
import useEpisode from "../../hooks/useEpisode/useEpisode";

const EpisodeList = () => {
  const { episodes } = useEpisode();

  const episodeNameStyle = {
    borderBottom: "1px solid #000", // Add a border between name and episode
    paddingBottom: "4px", // Adjust spacing if needed
    marginBottom: "4px", // Adjust spacing if needed
  };

  return (
    <ul>
      {episodes.map((episode) => (
        <li key={episode.id}>
          <div >{episode.name}</div>
          <div style={episodeNameStyle}>{episode.episode}</div>
        </li>
      ))}
    </ul>
  );
};

export default EpisodeList;
