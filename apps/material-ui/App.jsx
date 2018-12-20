import React, { Component } from 'react';
import {
  Tab,
  Tabs,
} from '@material-ui/core';
import Buttons from './Buttons.jsx';

const TabContainer = (props) => (
  <div style={{ padding: 8 * 3 }}>
    {props.children}
  </div>
);

class App extends React.Component {
  state = {
    value: 0,
  };

  _handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { value } = this.state;

    return (
      <div>
        <h1>React Material-UI</h1>
        <Tabs
          value={value}
          onChange={this._handleChange}
          indicatorColor="primary"
          textColor="inherit"
          centered
        >
          <Tab label="Buttons" />
          <Tab label="Icons" />
          <Tab label="Switches" />
        </Tabs>
        {value === 0 && <TabContainer><Buttons /></TabContainer>}
        {value === 1 && <TabContainer>Item Two</TabContainer>}
        {value === 2 && <TabContainer>Item Three</TabContainer>}
      </div>
    );
  }
}

export default App;
