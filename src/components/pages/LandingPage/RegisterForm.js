import React from 'react';
import { useHistory } from 'react-router-dom';
import _omit from 'lodash.omit';

import { Button, Form, Input } from 'antd';
import {
  UserOutlined,
  LockOutlined,
  RedoOutlined,
  IdcardOutlined,
  LikeOutlined,
} from '@ant-design/icons';

import { register } from '../../../api';

const RegisterForm = (props) => {
  const { push } = useHistory();
  const [form] = Form.useForm();
  const onFinish = async (values) => {
    try {
      await register(_omit(values, 'Confirm'));
      push('/');
    } catch (err) {
      const message = err.response.data.error;
      if (message === 'User already exists.') {
        form.setFields([
          {
            name: 'Username',
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
      <Form.Item name="FirstName">
        <Input prefix={<IdcardOutlined />} placeholder="First Name" />
      </Form.Item>
      <Form.Item name="LastName">
        <Input prefix={<IdcardOutlined />} placeholder="Last Name" />
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
      <Form.Item
        name="Confirm"
        validateTrigger="submit"
        rules={[
          {
            required: true,
            message: 'Please confirm your pasword!',
          },
          ({ getFieldValue }) => ({
            validator(rule, value) {
              if (!value || getFieldValue('Password') === value) {
                return Promise.resolve();
              }
              return Promise.reject('Passwords do not match!');
            },
          }),
        ]}
      >
        <Input
          type="password"
          prefix={<RedoOutlined />}
          placeholder="Confirm"
        />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" icon={<LikeOutlined />}>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default RegisterForm;
