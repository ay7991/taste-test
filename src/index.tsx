import React from "react";
import App from "./components/App";
import { createRoot } from "react-dom/client";
import Store from "./state/store";
import { Provider } from "react-redux";

const root = createRoot(document.getElementById("root"));

root.render(
    <Provider store={Store}>
        <App />
    </Provider>
);