import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from "react-router-dom";
import createHistory from 'history/createHashHistory';

import ReactGA from 'react-ga';

import App from "./App/App";

import "bootstrap/dist/css/bootstrap.css";
import './index.css';

ReactGA.initialize('UA-101258772-2');

function logPageView(location) {
  console.log(location.pathname, location.search);
  ReactGA.set({ page: location.pathname + location.search });
  ReactGA.pageview(location.pathname + location.search);
}

const history = createHistory();
history.listen((location, action) => {
  logPageView(location);
});
logPageView(history.location);

ReactDOM.render(
    (
        <Router history={history}>
            <App />
        </Router>
    ),
    document.getElementById("root")
);
