import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import * as RoutesConst from "./constants/Routes";
import { ChakraProvider } from "@chakra-ui/react";
import "@fontsource/pt-serif/700.css";
import "@fontsource/pt-serif/400.css";

import Home from "./components/pages/Home";

import customTheme from "./theme";

const App = (): React.ReactElement => {
  return (
    <ChakraProvider theme={customTheme}>
      <BrowserRouter>
        <Routes>
          <Route path={RoutesConst.HOME} Component={Home} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
};

export default App;
