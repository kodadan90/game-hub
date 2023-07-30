import { Grid, GridItem, Show} from "@chakra-ui/react";
import GameGrid from "./components/GameGrid";
 import { useState } from "react";
import React from 'react';
import './App.css';
import NavBar from "./components/NavBar"
import GenreList from "./components/GenreList";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";

function App() {
    const[selectedGenre, setSelectedGenre ] = useState<Genre | null>(null);
    const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(null);


    return <Grid templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`
    }}
    templateColumns={{
        base: '1fr',
        lg: '300px 1fr'
    }}
    >
<GridItem area='nav'>
    <NavBar onSearch={function (): void {
                throw new Error("Function not implemented.");
            } } />
    </GridItem>
<Show above="lg">
<GridItem area='aside' paddingX={5}>
    <GenreList selectedGenre={selectedGenre} onSelectGenre={(genre) => setSelectedGenre(genre)}/>
    Aside
</GridItem>
</Show>
<GridItem area='main'>
    <PlatformSelector selectedPlatform={selectedPlatform} onSelectplatform={(platform) => setSelectedPlatform(platform)}/>
    <GameGrid selectedPlatform={selectedPlatform} selectedGenre={selectedGenre} />
</GridItem>
    </Grid>
}

export default App; 
