import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { PrivateRoute } from './components/common';
import { LandingPage } from './components/pages/LandingPage/';

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route
          path={['/login', '/register']}
          component={() => <LandingPage />}
        />
        <PrivateRoute path="/" component={() => <h1>You made it!</h1>} />
      </Switch>
    </div>
  );
};

export default App;
