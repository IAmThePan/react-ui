import React, { Component } from 'react';
import {
  Grid,
  Row,
  Col,
  Tab,
  Tabs,
} from 'react-bootstrap';
import Buttons from './Buttons.jsx';
import Icons from './Icons.jsx';

class App extends React.Component {
  state = {
  };

  render() {

    return (
      <Grid>
        <Row>
          <Col>
            <h1>React Bootstrap (Bootstrap Version 3)</h1>
            <Tabs id="tabs">
              <Tab eventKey={1} title="Buttons">
                <Buttons />
              </Tab>
              <Tab eventKey={2} title="Icons">
                <Icons />
              </Tab>
              <Tab eventKey={3} title="Switches">
                <div>I don't think there is a switch component in Bootstrap</div>
              </Tab>
            </Tabs>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;
