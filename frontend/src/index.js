import React from "react";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ChakraProvider } from "@chakra-ui/react";
import ChatProvider from "./context/chatProvider";
import { BrowserRouter } from "react-router-dom";
import * as ReactDOMClient from "react-dom/client";

const root = ReactDOMClient.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ChakraProvider>
      <ChatProvider>
        <App />
      </ChatProvider>
    </ChakraProvider>
  </BrowserRouter>
);

reportWebVitals();
