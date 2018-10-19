// @flow

import React, { Component } from 'react';
import { Switch, Route } from 'react-router';
import Home from './components/Home';
import About from './components/About';
import './css/App.css';
import './css/buttons.css';

type Props = {};

export default class App extends Component<Props> {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/about" component={About}></Route>
        </Switch>
      </div>
    );
  }
}
