import { createRoot } from "react-dom/client";
import { ChakraProvider , defaultSystem } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

createRoot(document.querySelector("#content")).render(
  <ChakraProvider value={defaultSystem}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </ChakraProvider>
);