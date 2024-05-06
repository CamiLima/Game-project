import { SimpleGrid, Text } from "@chakra-ui/react";
import useAgents from "../hooks/useAgents";
import AgentsCard from "./AgentsCard";

const GameGrid = () => {
  const { agents, error } = useAgents();
  // Filtrando os agentes para remover aquele com o uuid especificado
  const filteredAgents = agents.filter(
    (agent) => agent.uuid !== "ded3520f-4264-bfed-162d-b080e2abccf9"
  );

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding="10px"
        spacing={10}
      >
        {filteredAgents.map((agent) => (
          <AgentsCard key={agent.uuid} agent={agent} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
