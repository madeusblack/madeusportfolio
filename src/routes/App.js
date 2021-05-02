import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Layout from '../Components/Layout';
import Contact from '../pages/Contact/Contact';
import Projects from '../pages/Projects/Projects';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/Projects' component={Projects} />
        <Route exact path='/Contact' component={Contact} />

      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
