/**
 * index.js
 * Entry file for repository
 */

// Node Modules
import React from 'react';
import {render} from 'react-dom';

// Components
import AppComponent from './components/App';

// Context
import {AppProvider} from 'components/Context';

// Styles
import 'styles/main.less';

const App = (
  <AppProvider>
    <AppComponent />
  </AppProvider>
);

render(App, document.getElementById('root'));
