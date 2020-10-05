import React, { useState } from 'react';
import { Button, Card, Col, Typography } from 'antd';
import Form from 'antd/lib/form/Form';
import { EditOutlined, CloseOutlined } from '@ant-design/icons';
const { Text } = Typography;

const Finished = (props) => {
  const { Text: Title, ImgURL, Real, Fake, Number } = props.question;
  return (
    <Card.Meta
      avatar={ImgURL}
      title={`${Number}. ${Title}`}
      description={
        <>
          <Text type="success">Real</Text>: {Real}
          <br />
          <Text type="warning">Fake</Text>: {Fake}
        </>
      }
    />
  );
};

const Update = (props) => {
  return (
    <>
      <h3>alskdjaflkjasd</h3>
    </>
  );
};

const PostNew = (props) => {
  return (
    <Card>
      <Form />
    </Card>
  );
};

const DisplaySetupCard = (props) => {
  const [updating, setUpdating] = useState(false);
  return (
    <Col span={8}>
      {props.question ? (
        <Card>
          <Button
            type="text"
            onClick={() => setUpdating((x) => !x)}
            icon={updating ? <CloseOutlined /> : <EditOutlined />}
            className="edit-form-toggle"
          />
          {updating ? <Update /> : <Finished question={props.question} />}
        </Card>
      ) : (
        <PostNew />
      )}
    </Col>
  );
};

export default DisplaySetupCard;
