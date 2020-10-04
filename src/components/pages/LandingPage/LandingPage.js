import React from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';

import StyledLandingPage from './StyledLandingPage';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

import { Row, Col, Tabs } from 'antd';

const LandingPage = (props) => {
  const { push, location } = useHistory();
  const tabClickHandler = (key) => {
    push(key);
  };
  return (
    <StyledLandingPage>
      <Row>
        <Col span={16}>
          <h1>Hollywood Squares</h1>
        </Col>
        <Col span={8}>
          <Tabs
            defaultActiveKey={location.pathname}
            onTabClick={tabClickHandler}
          >
            <Tabs.TabPane key="/login" tab="Login" />
            <Tabs.TabPane key="/register" tab="Register" />
          </Tabs>
          <Switch>
            <Route path="/login" component={() => <LoginForm />} />
            <Route path="/register" component={() => <RegisterForm />} />
          </Switch>
        </Col>
      </Row>
    </StyledLandingPage>
  );
};

export default LandingPage;
