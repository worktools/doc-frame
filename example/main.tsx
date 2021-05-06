import "./main.css";

import ReactDOM, { unstable_renderSubtreeIntoContainer } from "react-dom";
import React from "react";

import { parseRoutePath, IRouteParseResult } from "@worktools/ruled-router";

import { routerRules } from "./models/router-rules";

import Container from "./pages/container";
import { GenRouterTypeMain } from "controller/generated-router";

const renderApp = () => {
  let routerTree = parseRoutePath(window.location.hash.slice(1), routerRules);

  ReactDOM.render(<Container router={routerTree as any} />, document.querySelector(".app"));
};

window.onload = renderApp;

window.addEventListener("hashchange", () => {
  renderApp();
});

declare var module: any;

if (module.hot) {
  module.hot.accept(["./pages/container"], () => {
    renderApp();
  });
}
