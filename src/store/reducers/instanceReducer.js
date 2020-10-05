import { inst } from '../actions';

const initialState = {
  id: null,
  title: null,
  finished: null,
  winner: null,
  questions: null,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case inst.LOAD_INSTANCE:
      return {
        ...state,
        id: action.payload.ID,
        title: action.payload.Title,
        finished: action.payload.Finished,
        winner: action.payload.Winner,
        questions: action.payload.questions,
      };
    default:
      return state;
  }
};
