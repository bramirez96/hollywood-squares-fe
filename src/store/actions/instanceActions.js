export const LOAD_INSTANCE = 'LOAD_INSTANCE';
export const loadInstance = (game) => ({
  type: LOAD_INSTANCE,
  payload: game,
});

export const POST_QUESTION_START = 'POST_QUESTION_START';
