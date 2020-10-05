import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { connect } from 'react-redux';

import { Header } from '../../common';
import StyledGameSetup from './StyledGameSetup';
import { Row } from 'antd';
import DisplaySetupCard from '../GameHome/DisplaySetupCard';

const GameSetup = (props) => {
  const { push } = useHistory();

  // Pull state data from props
  const { questions } = props;

  useEffect(() => {
    if (!questions) {
      push('/');
    }
    console.log({ questions });
  }, []);

  return (
    <>
      <Header title="Game setup" backRoute="/" />
      {questions && (
        <StyledGameSetup>
          <Row gutter={16}>
            <DisplaySetupCard question={questions[1]} />
            <DisplaySetupCard question={questions[2]} />
            <DisplaySetupCard question={questions[3]} />
          </Row>
          <Row gutter={16}>
            <DisplaySetupCard question={questions[4]} />
            <DisplaySetupCard question={questions[5]} />
            <DisplaySetupCard question={questions[6]} />
          </Row>
          <Row gutter={16}>
            <DisplaySetupCard question={questions[7]} />
            <DisplaySetupCard question={questions[8]} />
            <DisplaySetupCard question={questions[9]} />
          </Row>
        </StyledGameSetup>
      )}
    </>
  );
};

export default connect(
  (state) => ({
    questions: state.inst.questions,
  }),
  (dispatch) => ({})
)(GameSetup);
