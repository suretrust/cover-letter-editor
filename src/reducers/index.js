import { combineReducers } from 'redux';
import text from './text';
import templates from './template';

export default combineReducers({
  text,
  templates
});
