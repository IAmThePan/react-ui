import React, { Component } from 'react';
import {
  Tab,
  Tabs,
} from 'react-bootstrap';
import Buttons from './Buttons.jsx';

class App extends React.Component {
  state = {
  };

  render() {

    return (
      <div>
        <h1>React Bootstrap (Bootstrap Version 3)</h1>
        <Tabs>
          <Tab eventKey={1} title="Buttons">
            <Buttons />
          </Tab>
          <Tab eventKey={2} title="Icons">
            Tab 2 Content
          </Tab>
          <Tab eventKey={3} title="Switches">
            Tab 3 Content
          </Tab>
        </Tabs>
      </div>
    );
  }
}

export default App;
