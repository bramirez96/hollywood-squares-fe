import React from 'react';
import StyledLandingPage from './StyledLandingPage';

import { Button, Checkbox, Form, Input } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const LandingPage = (props) => {
  return (
    <StyledLandingPage>
      <h1>some text</h1>
      <Form
        initialValues={{
          remember: true,
        }}
      >
        <Form.Item name="Username">
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
          />
        </Form.Item>
        <Form.Item name="Password">
          <Input
            type="password"
            prefix={<LockOutlined className="site-form-item-icon" />}
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember">
            <Checkbox>Remember Me</Checkbox>
          </Form.Item>

          <Link>Register</Link>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Log In
          </Button>
        </Form.Item>
      </Form>
    </StyledLandingPage>
  );
};

export default LandingPage;
