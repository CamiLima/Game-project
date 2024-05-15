import { SimpleGrid, Text } from "@chakra-ui/react";
import useAgents from "../hooks/useAgents";
import AgentsCard from "./AgentsCard";
import AgentsCardSkeleton from "./AgentsCardSkeleton";

const GameGrid = () => {
  const { agents, error, isLoading } = useAgents();
  const skeletons = [1, 2, 3, 4, 5, 6];

  // Filtrando os agentes para remover o Sova duplicado
  const filteredAgents = agents.filter(
    (agent) => agent.uuid !== "ded3520f-4264-bfed-162d-b080e2abccf9"
  );

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 6 }}
        padding="10px"
        spacing={10}
      >
        {isLoading &&
          skeletons.map((skeleton) => <AgentsCardSkeleton key={skeleton} />)}
        {filteredAgents.map((agent) => (
          <AgentsCard key={agent.uuid} agent={agent} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
