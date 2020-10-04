export const FETCH_GAMES = 'FETCH_GAMES';
export const fetchGamesStart = () => ({
  type: FETCH_GAMES,
  payload: { loading: true },
});
export const fetchGamesSuccess = (games) => ({
  type: FETCH_GAMES,
  payload: { loading: false, instances: games },
});
export const fetchGamesFailure = () => ({
  type: FETCH_GAMES,
  payload: { loading: false },
});
