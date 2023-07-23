import {Box, Flex, Grid, GridItem, HStack, Show} from "@chakra-ui/react"
import { useState } from "react"
import React from 'react'
import './App.css'
//import NavBar from "./components/NavBar"

function App() {
    return <Grid templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`
    }}>
<GridItem area='nav'>
    <NavBar />
    </GridItem>
<Show above="lg">
<GridItem area='aside' bg='gold'>Aside</GridItem>
</Show>
<GridItem area='nav' bg='dogerblue'>Main</GridItem>
    </Grid>
}

export default App