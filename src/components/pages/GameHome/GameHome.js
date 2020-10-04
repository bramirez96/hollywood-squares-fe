import React, { useCallback, useEffect } from 'react';

import { connect } from 'react-redux';
import { games } from '../../../store/actions';
import { getGames } from '../../../api';

import StyledGameHome from './StyledGameHome';
import DisplayGameCard from './DisplayGameCard';
import { Row, Spin } from 'antd';

const GameHome = (props) => {
  // Getting State data form props
  const { games, isLoading } = props;

  // Pulling Redux action creators from props
  const { startFetch, fetchSuccess, fetchFailure } = props;
  const load = useCallback(async () => {
    try {
      startFetch();
      const { data: games } = await getGames();
      fetchSuccess(games);
    } catch (error) {
      console.log(error);
      fetchFailure();
    }
  }, [startFetch, fetchFailure, fetchSuccess]);

  const { openGame } = props;
  const openBoard = (i) => {
    openGame(games[i]);
  };

  useEffect(() => {
    load();
  }, [load]);

  return (
    <StyledGameHome>
      <h1>My Games</h1>
      {isLoading ? <Spin /> : null}
      <Row gutter={16} className="game-list">
        {games.map((item, i) => {
          return (
            <DisplayGameCard
              key={item.ID}
              game={item}
              clickHander={(e) => {
                e.preventDefault();
                openBoard(i);
              }}
            />
          );
        })}
      </Row>
    </StyledGameHome>
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
  })
)(GameHome);
