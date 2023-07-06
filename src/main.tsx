import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "@/_main.scss";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import theme from "@assets/theme/theme.ts";
import { Provider } from "react-redux";
import { store } from "@redux/store.ts";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Provider store={store}>
        <App />
      </Provider>
    </ChakraProvider>
  </React.StrictMode>
);
