import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import "@radix-ui/themes/styles.css";
import { store } from "./redux/store";
import App from "./App";
import "./index.css";
import { Theme } from "@radix-ui/themes";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Theme
        accentColor="bronze"
        grayColor="auto"
        radius="small"
        scaling="100%"
        panelBackground="solid"
        appearance="inherit"
      >
        <App />
      </Theme>
    </Provider>
  </React.StrictMode>
);
