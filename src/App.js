import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { PrivateRoute } from './components/common';

import { LandingPage } from './components/pages/LandingPage/';
import { GameHome } from './components/pages/GameHome';

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route
          path={['/login', '/register']}
          component={() => <LandingPage />}
        />
        <PrivateRoute path="/" component={() => <GameHome />} />
      </Switch>
    </div>
  );
};

export default App;
