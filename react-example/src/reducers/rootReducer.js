
import { combineReducers } from 'redux';
import errors from './errorsReducer';
import media from './mediaReducer';
import playSettings from './playSettingsReducer';
import publishSettings from './publishSettingsReducer';
import webrtcPublish from './webrtcPublishReducer';
import webrtcPlay from './webrtcPlayReducer';

const rootReducer = combineReducers({
  errors,
  media,
  playSettings,
  publishSettings,
  webrtcPublish,
  webrtcPlay,
})

export default rootReducer;
