import { Button, ButtonGroup, Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "main"`, // Alterando para duas linhas em ambos breakpoints
      }}
      templateRows={{
        base: "auto 1fr", // Definindo altura automática para nav e main
        lg: "auto 1fr", // Definindo altura automática para nav e main
      }}
      h="100vh" // Definindo a altura do grid como 100% da altura da viewport
    >
      <GridItem area={"nav"}>
        <NavBar></NavBar>
      </GridItem>
      <GridItem area={"main"} position="relative">
        Main
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
