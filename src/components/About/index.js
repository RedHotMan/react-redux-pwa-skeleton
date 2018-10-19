// @flow

import React, { Component, Fragment } from 'react';
import { Button } from '../atoms/buttons';
import type { RouterHistory } from 'react-router';

type Props = {
  history: RouterHistory
};

export default class About extends Component<Props> {
  goToHome() {
    // Here we use "history" wich provides several implementations for managing session history in JS
    // push(path, [state]) - (function) Pushes a new entry onto the history stack
    this.props.history.push('/');
  }

  render() {
    return (
      <Fragment>
        <h1>About Page</h1>
        <Button style={{margin: 'auto'}} label="Go back to home" className='btn-info' onClick={() => { this.goToHome() }} />
      </Fragment>
    )
  }
}
