import React, { useState } from "react";
import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import AgentsClasses from "./components/AgentsClasses";

function App() {
  const [selectedClass, setSelectedClass] = useState<string>("");

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "250px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <AgentsClasses onSelectClass={setSelectedClass} />
        </GridItem>
      </Show>
      <GridItem area="main">
        <GameGrid selectedClass={selectedClass} />
      </GridItem>
    </Grid>
  );
}

export default App;
