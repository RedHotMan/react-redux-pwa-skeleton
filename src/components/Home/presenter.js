// @flow
import React, { Component } from 'react';
import logo from '../../assets/images/logo.svg';
import { Link } from 'react-router-dom';

type Props = {
  getOwnerName: Function,
  ownerName: string,
}

export class Home extends Component<Props> {
  componentDidMount() {
    this.props.getOwnerName();
  }

  render() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello world, this is react-redux-pwa-skeleton by {this.props.ownerName}</h1>
        {/* We can use directly the declarative "Link" provided by "react-router-dom" to naviguate in the application */}
        {/* It's the better way to navigate in your application by the way */}
        <Link className="btn btn-info" to={'/about'}>Go to About</Link>
      </header>
    )
  }
}
