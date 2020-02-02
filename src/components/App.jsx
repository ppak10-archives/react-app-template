/**
 * App.jsx
 * Main react app component
 */

// Node Modules
import React from 'react';
import {Card, Grid, Layout, Sidebar} from 'react-app-elements';
// import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

export default function App() {
  return (
<div className="layout-row">
      <Layout.PageLayout>
        <div>Hello World</div>
        <Grid.PolaroidContainer>
          <Card.Polaroid/>
          <Card.Polaroid/>
          <Card.Polaroid/>
          <Card.Polaroid/>
          <Card.Polaroid/>
          <Card.Polaroid/>
          <Card.Polaroid/>
          <Card.Polaroid/>
        </Grid.PolaroidContainer>
      </Layout.PageLayout>
      <Sidebar.DrawerSidebar side="right">
        <div>Hello</div>
        <div>World</div>
      </Sidebar.DrawerSidebar>
    </div>
  );
}
