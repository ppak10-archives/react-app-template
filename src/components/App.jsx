/**
 * App.jsx
 * Main react app component
 */

// Node Modules
import React from 'react';
import {Card, Grid, Layout, Sidebar} from 'react-app-elements';
// import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

// Constants
const IMAGES = 100;
const MAX_SIZE = 1000;

// Utils
import {getRandomInt} from '../utils';
export default function App() {
  // JSX
  const polaroidJSX = [...Array(IMAGES)].map((e, index) => (
    <Card.Polaroid
      key={index}
      scale={1}
      src={`https://picsum.photos/${getRandomInt(MAX_SIZE)}/${getRandomInt(
          MAX_SIZE,
      )}`}
    />
  ));

  return (
    <div className="layout-row">
      <Layout.Page>
        <div>Hello World</div>
        <Grid.PolaroidContainer>{polaroidJSX}</Grid.PolaroidContainer>
      </Layout.Page>
      <Sidebar.DrawerSidebar side="right">
        <div>Hello</div>
        <div>World</div>
      </Sidebar.DrawerSidebar>
    </div>
  );
}
