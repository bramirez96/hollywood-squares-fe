import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { PrivateRoute } from './components/common';
import { LandingPage } from './components/pages/LandingPage/';

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route path="/login" component={() => <LandingPage />} />
      </Switch>
    </div>
  );
};

export default App;
