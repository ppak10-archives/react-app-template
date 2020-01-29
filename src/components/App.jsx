/**
 * App.jsx
 * Main react app component
 */

// Node Modules
import React from 'react';
import {Card, Layout, Sidebar} from 'react-app-elements';
// import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

export default function App() {
  return (
<div className="layout-row">
      <Layout.PageLayout>
        <div>Hello World</div>
        <Layout.GridLayout>
          <Card.PolaroidCard />
          <Card.PolaroidCard />
          <Card.PolaroidCard />
          <Card.PolaroidCard />
          <Card.PolaroidCard />
          <Card.PolaroidCard />
          <Card.PolaroidCard />
          <Card.PolaroidCard />
        </Layout.GridLayout>
      </Layout.PageLayout>
      <Sidebar.DrawerSidebar side="right">
        <div>Hello</div>
        <div>World</div>
      </Sidebar.DrawerSidebar>
    </div>
  );
}
