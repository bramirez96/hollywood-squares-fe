import { combineReducers } from 'redux';

import { reducer as games } from './gameReducer';
import { reducer as inst } from './instanceReducer';

export default combineReducers({ games, inst });
