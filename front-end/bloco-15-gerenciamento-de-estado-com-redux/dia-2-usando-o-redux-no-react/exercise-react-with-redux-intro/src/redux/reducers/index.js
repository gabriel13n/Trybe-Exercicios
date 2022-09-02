// src/redux/reducers/index.js

import { combineReducers } from 'redux';
import carReducer from '../../carReducer';
import trafficReducer from './trafficReducer';

const reducer = combineReducers({
  carReducer,
  trafficReducer });

export default reducer;
