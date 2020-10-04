import { games } from '../actions';

const initialState = {
  loading: false,
  instances: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case games.FETCH_GAMES:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
