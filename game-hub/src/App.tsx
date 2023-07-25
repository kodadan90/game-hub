import { Grid, GridItem, Show} from "@chakra-ui/react";
import GameGrid from "./components/GameGrid";
// import { useState } from "react";
import React from 'react';
import './App.css';
import NavBar from "./components/NavBar"

function App() {
    return <Grid templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`
    }}>
<GridItem area='nav'>
    <NavBar onSearch={function (): void {
                throw new Error("Function not implemented.");
            } } />
    </GridItem>
<Show above="lg">
<GridItem area='aside'>
    Aside
</GridItem>
</Show>
<GridItem area='main'>
    <GameGrid />
</GridItem>
    </Grid>
}

export default App; 
