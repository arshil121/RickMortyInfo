import { CanceledError } from "axios";
import { useState, useEffect } from "react";
import apiClient from "../../services/api-client/api-client";

interface Episodes {
  id: number;
  episode: string;
  name: string;
}

interface FetchEpisodeResponse {
  count: number;
  results: Episodes[];
}

const useEpisode = () => {
  const [episodes, setEpisodes] = useState<Episodes[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    apiClient
      .get<FetchEpisodeResponse>("/episode", { signal: controller.signal })
      .then((res) => {
        setEpisodes(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

    return () => controller.abort();
  }, []);

  return { episodes, error, isLoading };
};

export default useEpisode;
