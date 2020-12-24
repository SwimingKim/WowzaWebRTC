import React from "react";
import { useSelector, useDispatch } from "react-redux";

import * as PlaySettingsActions from "../../actions/playSettingsActions";

const PlaySettingsForm = () => {
  const dispatch = useDispatch();
  const playSettings = useSelector((state) => state.playSettings);
  const webrtcPlay = useSelector((state) => state.webrtcPlay);

  return (
    <div>
      <form>
        <label htmlFor="playSdpURL">Signaling URL</label>
        <input
          type="text"
          className="form-control"
          id="playSignalingURL"
          name="playSignalingURL"
          maxLength="1024"
          placeholder="wss://[ssl-certificate-domain-name]/webrtc-session.json"
          value={playSettings.signalingURL}
          onChange={(e) =>
            dispatch({
              type: PlaySettingsActions.SET_PLAY_SIGNALING_URL,
              signalingURL: e.target.value,
            })
          }
        />
        <label htmlFor="playApplicationName">Application Name</label>
        <input
          type="text"
          className="form-control"
          id="playApplicationName"
          name="playApplicationName"
          maxLength="256"
          value={playSettings.applicationName}
          onChange={(e) =>
            dispatch({
              type: PlaySettingsActions.SET_PLAY_APPLICATION_NAME,
              applicationName: e.target.value,
            })
          }
        />
        <label htmlFor="playStreamName">Stream Name</label>
        <input
          type="text"
          className="form-control"
          id="playStreamName"
          name="playStreamName"
          maxLength="256"
          value={playSettings.streamName}
          onChange={(e) =>
            dispatch({
              type: PlaySettingsActions.SET_PLAY_STREAM_NAME,
              streamName: e.target.value,
            })
          }
        />
        {!webrtcPlay.connected && (
          <button
            id="play-toggle"
            type="button"
            className="btn"
            disabled={playSettings.playStarting}
            onClick={(e) => dispatch(PlaySettingsActions.startPlay())}
          >
            Play
          </button>
        )}
        {webrtcPlay.connected && (
          <button
            id="play-toggle"
            type="button"
            className="btn"
            onClick={(e) => dispatch(PlaySettingsActions.stopPlay())}
          >
            Stop
          </button>
        )}
      </form>
    </div>
  );
};

export default PlaySettingsForm;
