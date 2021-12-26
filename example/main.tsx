import "./main.css";

import ReactDOM, { unstable_renderSubtreeIntoContainer } from "react-dom";
import React from "react";

import { parseRoutePath, IRouteParseResult } from "@worktools/ruled-router";

import { routerRules } from "./models/router-rules";

import Container from "./pages/container";

const renderApp = () => {
  let routerTree = parseRoutePath(window.location.hash.slice(1), routerRules);

  ReactDOM.render(<Container router={routerTree as any} />, document.querySelector(".app"));
};

window.onload = renderApp;

window.addEventListener("hashchange", () => {
  renderApp();
});

if (import.meta.hot) {
  import.meta.hot.accept(["./pages/container"], () => {
    renderApp();
  });
}
