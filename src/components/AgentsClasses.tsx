import React from "react";
import { List, ListItem, Image, Text, Button, HStack } from "@chakra-ui/react";

interface DefaultValues {
  iconWidth: string;
  iconMarginRight: string;
  imagePaths: {
    controllers: string;
    duelists: string;
    initiators: string;
    sentinels: string;
  };
  texts: {
    controllers: string;
    duelists: string;
    initiators: string;
    sentinels: string;
  };
}

const defaultValues: DefaultValues = {
  iconWidth: "30px",
  iconMarginRight: "2",
  imagePaths: {
    controllers:
      "https://media.valorant-api.com/agents/roles/4ee40330-ecdd-4f2f-98a8-eb1243428373/displayicon.png",
    duelists:
      "https://media.valorant-api.com/agents/roles/dbe8757e-9e92-4ed4-b39f-9dfc589691d4/displayicon.png",
    initiators:
      "https://media.valorant-api.com/agents/roles/1b47567f-8f7b-444b-aae3-b0c634622d10/displayicon.png",
    sentinels:
      "https://media.valorant-api.com/agents/roles/5fc02f99-4091-4486-a531-98459a3e95e9/displayicon.png",
  },
  texts: {
    controllers: "Controllers",
    duelists: "Duelists",
    initiators: "Initiators",
    sentinels: "Sentinels",
  },
};

const AgentClassItem: React.FC<{ iconSrc: string; text: string }> = ({
  iconSrc,
  text,
}) => (
  <ListItem display="flex" alignItems="left">
    <HStack>
      <Image
        src={iconSrc}
        alt="Ícone"
        boxSize={defaultValues.iconWidth}
        mr={defaultValues.iconMarginRight}
        style={{
          filter: "brightness(0.5)",
        }}
      />
      <Button
        onClick={() => console.log(text)}
        variant="link"
        flex="1"
        fontSize="md"
        whiteSpace="normal"
        textAlign="left"
      >
        {text}
      </Button>
    </HStack>
  </ListItem>
);

const AgentsClasses = () => {
  return (
    <List spacing="5">
      {Object.entries(defaultValues.imagePaths).map(([key, value]) => (
        <AgentClassItem
          key={key}
          iconSrc={value}
          text={
            defaultValues.texts[key as keyof typeof defaultValues.imagePaths]
          }
        />
      ))}
    </List>
  );
};

export default AgentsClasses;
