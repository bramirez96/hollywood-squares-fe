import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { tokenHandler } from '../../lib';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const token = tokenHandler.read();
  return (
    <Route
      {...rest}
      render={(props) => {
        if (token) {
          return <Component {...props} />;
        } else {
          return <Redirect to="/login" />;
        }
      }}
    />
  );
};

export default PrivateRoute;
