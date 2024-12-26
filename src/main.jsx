import { createRoot } from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

createRoot(document.querySelector("#content")).render(
  <ChakraProvider>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </ChakraProvider>
);