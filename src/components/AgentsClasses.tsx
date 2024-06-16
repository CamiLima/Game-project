import React from "react";
import { List, ListItem, Image, Button, HStack } from "@chakra-ui/react";

interface AgentsClassesProps {
  onSelectClass: (classe: string) => void;
  selectedClass: string;
}

const AgentsClasses: React.FC<AgentsClassesProps> = ({
  selectedClass,
  onSelectClass,
}) => {
  interface DefaultValues {
    imagePaths: {
      [key: string]: string;
    };
    texts: {
      [key: string]: string;
    };
  }

  const defaultValues: DefaultValues = {
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

  const handleClassClick = (classe: string) => {
    if (classe !== selectedClass) {
      onSelectClass(classe);
    }
  };

  return (
    <List spacing="5">
      {Object.entries(defaultValues.imagePaths).map(([key, value]) => (
        <ListItem key={key} display="flex" alignItems="left">
          <HStack>
            <Image
              src={value}
              alt="Ícone"
              boxSize="30px"
              mr="2"
              style={{
                filter: "brightness(0.5)",
              }}
            />
            <Button
              onClick={() => handleClassClick(key)}
              variant="link"
              flex="1"
              fontSize="md"
              whiteSpace="normal"
              textAlign="left"
              fontWeight={key === selectedClass ? "bold" : "normal"}
              textDecoration="none" // Remove underline here
            >
              {defaultValues.texts[key]}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default AgentsClasses;
