import React, { Component } from 'react';
import {
  Tab,
  Tabs,
  Typography,
} from '@material-ui/core';
import Buttons from './Buttons.jsx';
import Playground from './Playground.jsx';

const TabContainer = (props) => (
  <Typography component="div" style={{ padding: 8 * 3 }}>
    {props.children}
  </Typography>
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
          <Tab label="Loading Animations" />
        </Tabs>
        {value === 0 && <TabContainer><Buttons /></TabContainer>}
        {value === 1 && <TabContainer>Item Two</TabContainer>}
        {value === 2 && <TabContainer><Playground /></TabContainer>}
      </div>
    );
  }
}

export default App;
