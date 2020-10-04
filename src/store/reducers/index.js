import { combineReducers } from 'redux';

import { reducer as games } from './gameReducer';

export default combineReducers({ games });
