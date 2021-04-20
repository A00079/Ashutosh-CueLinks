import React, { useEffect } from "react";
import { Provider } from "react-redux";
import store from "./store";
import ReactGA from "react-ga";
import Routes from "./Routes";

import "./assets/scss/index.scss";

const App = () => {
  const initGA = () => {
    ReactGA.initialize("G-F1J0DYDF27");
  };

  useEffect(() => {
    initGA();
    ReactGA.pageview(window.location.pathname);
  }, []);

  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
};
export default App;
