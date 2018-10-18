import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getOwnerName } from './actions/owner';
import logo from './assets/images/logo.svg';
import './css/App.css';

class App extends Component {
  componentDidMount() {
    this.props.getOwnerName();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Hello world, this is react-redux-pwa-skeleton by {this.props.owerName}</h1>
        </header>
      </div>
    );
  }
}

// use (state) to call the entire app state
const mapStateToProps = ({ ownerNameReducer}) => {
  return {
    owerName: ownerNameReducer.ownerName,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getOwnerName: () => dispatch(getOwnerName())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
