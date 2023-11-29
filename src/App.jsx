import React from "react";
import { Box, ChakraProvider as CP } from "@chakra-ui/react"
import { extendTheme} from '@chakra-ui/react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
//=========================================================================//
import Home from "./components/routes/Home";
import AboutUsPage from  "./components/routes/AboutUsPage";
import { List } from "./components/routes/List";
//=========================================================================//
import { Menu } from "./components/Menu";


const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
}
const theme = extendTheme({ colors })

  export default function App() {
    return (
      <CP theme={theme}>
        <Box
        textAlign='center' 
        color="teal.800"
        p="4" 
        bg="teal.100" 
        width="100%" 
        boxShadow='dark-lg'  
        rounded='md'>
          <Menu />
          <Box mt={4}>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about-us" element={<AboutUsPage />} />
                <Route path="/list" element={<List />} />
              </Routes>
            </BrowserRouter>
          </Box>
        </Box>
      </CP>
    );
  }
