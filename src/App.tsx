import {
  Button,
  ButtonGroup,
  Grid,
  GridItem,
  List,
  ListItem,
  Show,
} from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import AgentsClasses from "./components/AgentsClasses";
import useAgents from "./hooks/useAgents";

function App() {
  const { agents, error, isLoading } = useAgents();

  const filteredAgents = agents.filter(
    (agent) => agent.uuid !== "ded3520f-4264-bfed-162d-b080e2abccf9"
  );

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
          <AgentsClasses />
        </GridItem>
      </Show>
      <GridItem area="main">
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
