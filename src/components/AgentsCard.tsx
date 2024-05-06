import React from "react";
import { Agents } from "../hooks/useAgents";
import { Card, CardBody, Heading, Image } from "@chakra-ui/react";

interface Props {
  agent: Agents;
}

const AgentsCard = ({ agent }: Props) => {
  return (
    <Card borderRadius={10} overflow="hidden" maxW="200px">
      <Image src={agent.fullPortrait} boxSize="200px" />
      <CardBody>
        <Heading fontSize="2xl">{agent.displayName}</Heading>
      </CardBody>
    </Card>
  );
};

export default AgentsCard;
