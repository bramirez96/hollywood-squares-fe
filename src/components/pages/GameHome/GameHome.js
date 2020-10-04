import React, { useCallback, useEffect, useMemo } from 'react';

import { connect } from 'react-redux';
import { games } from '../../../store/actions';
import { getGames } from '../../../api';

import StyledGameHome from './StyledGameHome';
import { Spin } from 'antd';

const GameHome = (props) => {
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

  useEffect(() => {
    load();
  }, [load]);

  // Getting State data form props
  const { games, isLoading } = props;

  return (
    <StyledGameHome>
      <h1>GAME</h1>
      {isLoading ? <Spin /> : null}
      {games.map((item) => {
        return (
          <div key={item.ID}>
            {item.ID}: {item.Title}
          </div>
        );
      })}
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
