/**
 * app.js
 * Reducers for app context
 */

export const initialState = {
  auth: {
    token: '',
    userId: 0,
  },
};

export const reducer = (state, {type, payload}) => {
  switch (type) {
    case 'SET_AUTH_DATA':
      return {
        ...state,
        auth: payload,
      };
    case 'REMOVE_AUTH_DATA':
      return {
        ...state,
        auth: initialState.auth,
      };
    default:
      return state;
  }
};
