/**
 * Context.js
 * Context for app state
 */

// Node Modules
import React, {createContext, useReducer} from 'react';
import PropTypes from 'prop-types';

// Reducers
import {initialState, reducer} from 'reducers/app';

export const AppContext = createContext();

export const AppProvider = ({children}) => (
  <AppContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </AppContext.Provider>
);

AppProvider.propTypes = {
  children: PropTypes.node,
};
