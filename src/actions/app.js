/**
 * app.js
 * Actions for app context
 */

export const setAuthData = (data) => ({
  type: 'SET_AUTH_DATA',
  payload: {
    token: data.token,
    userId: data.user.id,
  },
});
