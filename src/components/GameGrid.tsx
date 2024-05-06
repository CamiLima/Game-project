import { Text } from "@chakra-ui/react";
import useAgents from "../hooks/useAgents";

const GameGrid = () => {
  const { agents, error } = useAgents();
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
