import React, { useCallback, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { connect } from 'react-redux';
import { games, inst } from '../../../store/actions';
import { getGames, loadQuestions } from '../../../api';

import { Header } from '../../common';
import StyledGameHome from './StyledGameHome';
import DisplayGameCard from './DisplayGameCard';
import { notification, Row, Spin } from 'antd';

const GameHome = (props) => {
  const { push } = useHistory();

  // Getting State data from props
  const { games, isLoading } = props;

  // Pulling Redux action creators from props
  const { startFetch, fetchSuccess, fetchFailure } = props;
  const load = useCallback(async () => {
    try {
      startFetch();
      const { data } = await getGames();
      fetchSuccess(data);
    } catch (error) {
      console.log(error);
      fetchFailure();
    }
  }, [startFetch, fetchFailure, fetchSuccess]);

  const { loadInst } = props;
  const openBoard = useCallback(
    async (game) => {
      try {
        const { data } = await loadQuestions(game.ID);
        const questions = {};
        data.forEach((q) => {
          questions[q.Number] = q;
        });
        loadInst({ ...game, questions });
        push('/game/setup');
      } catch (error) {
        notification.error({
          message: 'Unable to load game.',
        });
      }
    },
    [loadInst, push]
  );

  useEffect(() => {
    load();
  }, [load]);

  return (
    <>
      <Header />
      <StyledGameHome>
        {isLoading ? <Spin /> : null}
        <Row gutter={16} className="game-list">
          {games.map((item) => {
            return (
              <DisplayGameCard
                key={item.ID}
                game={item}
                clickHandler={(e) => {
                  e.preventDefault();
                  openBoard(item);
                }}
              />
            );
          })}
        </Row>
      </StyledGameHome>
    </>
  );
};

export default connect(
  (state) => ({
    isLoading: state.games.loading,
    games: state.games.instances,
  }),
  (dispatch) => ({
    startFetch: () => dispatch(games.fetchGamesStart()),
    fetchSuccess: (data) => dispatch(games.fetchGamesSuccess(data)),
    fetchFailure: () => dispatch(games.fetchGamesFailure()),
    loadInst: (game) => dispatch(inst.loadInstance(game)),
  })
)(GameHome);
