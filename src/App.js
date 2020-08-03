import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import './App.css';
import Layout from './Layout';
import Dashboard from './pages/Dashboard';
import Identity from './pages/Identity';
import Overview from './pages/Overview';
import Interests from './pages/Interests';

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/" component={Dashboard} exact/>
          <Route path="/overview" component={Overview} />
          <Route path="/identity" component={Identity} />
          <Route path="/attitude" component={Dashboard} />
          <Route path="/interests" component={Interests} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
