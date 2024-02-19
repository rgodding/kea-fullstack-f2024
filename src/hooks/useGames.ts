import { useState, useEffect } from "react";
import apiClient from "../services/api-client";

interface GameResponse {
  count: number;
  results: Game[];
}

interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
}

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient
      .get<GameResponse>("games")
      .then((res) => setGames(res.data.results))
      .catch((error) => setError(error.message));
  }, []);

  return { games, error };
};

export default useGames;