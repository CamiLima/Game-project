import React from "react";
import { SimpleGrid, Text } from "@chakra-ui/react";
import useAgents from "../hooks/useAgents";
import AgentsCard from "./AgentsCard";
import AgentsCardSkeleton from "./AgentsCardSkeleton";
import AgentsCardContainer from "./AgentsCardContainer";

interface GameGridProps {
  selectedClass: string;
}

const GameGrid: React.FC<GameGridProps> = ({ selectedClass }) => {
  const { agents, error, isLoading } = useAgents(selectedClass);

  // Filter out the agents to remove the duplicate Sova
  const filteredAgents = agents.filter(
    (agent) => agent.uuid !== "ded3520f-4264-bfed-162d-b080e2abccf9"
  );

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 6 }}
        padding="10px"
        spacing={5}
      >
        {isLoading
          ? // Render skeletons while loading
            Array.from({ length: 6 }).map((_, index) => (
              <AgentsCardContainer key={index}>
                <AgentsCardSkeleton />
              </AgentsCardContainer>
            ))
          : // Render cards of filtered agents
            filteredAgents.map((agent) => (
              <AgentsCardContainer key={agent.uuid}>
                <AgentsCard agent={agent} />
              </AgentsCardContainer>
            ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
