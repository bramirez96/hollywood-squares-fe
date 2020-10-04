import React from 'react';
import { useHistory } from 'react-router-dom';

import { Button, /*Checkbox,*/ Form, Input } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

import { login } from '../../../api';

const LoginForm = (props) => {
  const { push } = useHistory();
  const [form] = Form.useForm();
  const onFinish = async (values) => {
    try {
      await login(values);
      push('/');
    } catch (err) {
      const message = err.response.data.error;
      if (message === 'User not found.') {
        form.setFields([
          {
            name: 'Username',
            errors: [message],
            validateStatus: 'error',
          },
        ]);
      } else if (message === 'Your password is incorrect.') {
        form.setFields([
          {
            name: 'Password',
            errors: [message],
            validateStatus: 'error',
          },
        ]);
      }
    }
  };
  return (
    <Form
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      form={form}
    >
      <Form.Item
        name="Username"
        rules={[
          {
            required: true,
            message: 'Username is required!',
          },
        ]}
      >
        <Input prefix={<UserOutlined />} placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="Password"
        rules={[
          {
            required: true,
            message: 'Password is required!',
          },
        ]}
      >
        <Input
          type="password"
          prefix={<LockOutlined />}
          placeholder="Password"
        />
      </Form.Item>
      {/* <Form.Item name="remember" valuePropName="checked">
        <Checkbox>Remember Me</Checkbox>
      </Form.Item> */}
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Log In
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
