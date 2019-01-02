import React, { Component } from 'react';
import './material-components-web.min.css';
import Buttons from './Buttons.jsx';

class App extends React.Component {

  render() {

    return (
      <div>
        <h1>React Material Components Web</h1>
        <h6>Material UI CSS imported using JavaScript</h6>
        <Buttons />
      </div>
    );
  }
}

export default App;
