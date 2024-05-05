import React, { useEffect, useState } from "react";
import apiClient from "../services/api.client";
import { Text } from "@chakra-ui/react";

interface Agents {
  uuid: string;
  displayName: string;
}

interface FetchAgentsResponse {
  count: number;
  data: Agents[];
}

const GameGrid = () => {
  const [agents, setAgents] = useState<Agents[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient
      .get<FetchAgentsResponse>("/agents")
      .then((res) => {
        const data = res.data.data;

        setAgents(data);
      })
      .catch((err) => setError(err.message));
  });

  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {agents.map((agent) => (
          <li key={agent.uuid}>{agent.displayName} </li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
