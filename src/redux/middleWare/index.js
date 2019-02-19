
export const  rtcPeerConnection = (connection) => {
    return ({ dispatch, getState }) => {
      return next => (action) => {
        if (typeof action === 'function') {
          return action(dispatch, getState);
        }else if( typeof action === 'object' && action.rtcPeerConnection !== undefined ){
            return action.rtcPeerConnection(connection, dispatch, getState)
        }
        return next(action);
      };
    };
}

export const  socketConnection = (connection) => {
  return ({ dispatch, getState }) => {
    return next => (action) => {
      if (typeof action === 'function') {
        return action(dispatch, getState);
      }else if( typeof action === 'object' && action.socket !== undefined ){
          return action.socket(connection, dispatch, getState)
      }
      return next(action);
    };
  };
}

export const  rtcNavigator = (navigator) => {
  return ({ dispatch, getState }) => {
    return next => (action) => {
      if (typeof action === 'function') {
        return action(dispatch, getState);
      }else if( typeof action === 'object' && action.rtcNavigator !== undefined ){
          return action.rtcNavigator(navigator, dispatch, getState)
      }
      return next(action);
    };
  };
}