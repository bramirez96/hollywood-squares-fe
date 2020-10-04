import React from 'react';

import { Card, Col, Typography } from 'antd';
const { Text } = Typography;

const DisplayGameCard = (props) => {
  const { clickHandler } = props;
  const { Title, Winner, Finished } = props.game;
  return (
    <Col span={8}>
      <Card className="display-game-card" onClick={clickHandler} hoverable>
        <Card.Meta
          title={Title}
          description={
            <>
              Status:{' '}
              {Finished ? (
                <Text type="success">{Winner} wins!</Text>
              ) : (
                <Text type="warning">Incomplete</Text>
              )}
            </>
          }
        />
      </Card>
    </Col>
  );
};

export default DisplayGameCard;
