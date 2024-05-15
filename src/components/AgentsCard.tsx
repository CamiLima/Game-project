import React from "react";
import { Agents } from "../hooks/useAgents";
import { Card, CardBody, Heading, Image, HStack } from "@chakra-ui/react";

interface Props {
  agent: Agents;
}

const AgentsCard = ({ agent }: Props) => {
  return (
    <Card>
      <Image src={agent.fullPortrait} boxSize="200px" />
      <CardBody>
        <Heading fontSize="2xl">{agent.displayName}</Heading>
        <HStack marginY={1}>
          {agent.abilities.map((ability) => (
            <Image
              key={ability.displayName}
              src={ability.displayIcon}
              boxSize="28px"
              mr={1}
              style={{
                filter: "brightness(0.5)",
              }}
            />
          ))}
        </HStack>
      </CardBody>
    </Card>
  );
};

export default AgentsCard;
