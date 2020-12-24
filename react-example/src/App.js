import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Provider as StoreProvider } from "react-redux";

import store from './store'

import Play from './components/play/Play';
import Publish from './components/publish/Publish';
import CompositorUserMedia from './components/media/CompositorUserMedia';
import Devices from './components/media/Devices';

const App = () => {

  return (
    <StoreProvider store={store}>
      <CompositorUserMedia />
      <Devices />
      <Router basename={process.env.REACT_APP_BASENAME}>
        <Switch>
          <Route path="/play">
            <Play />
          </Route>
          <Route path="/">
            <Publish />
          </Route>
        </Switch>
      </Router>
    </StoreProvider>
  );
}

export default App;
