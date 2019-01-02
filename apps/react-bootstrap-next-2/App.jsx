import React, { Component } from 'react';
import 'bootstrap-4/dist/css/bootstrap.min.css';
import {
  Container,
  Row,
  Col,
  Tab,
  Tabs,
} from 'react-bootstrap-next';
import Buttons from './Buttons.jsx';
import Icons from './Icons.jsx';

class App extends React.Component {
  state = {
  };

  render() {

    return (
      <Container>
        <Row>
          <Col>
            <h1>React Bootstrap Next (Bootstrap Version 4)</h1>
            <h6>Bootstrap CSS imported using JavaScript</h6>
            <Tabs id="tabs">
              <Tab eventKey={1} title="Buttons">
                <Buttons />
              </Tab>
              <Tab eventKey={2} title="Icons">
                <Icons />
              </Tab>
              <Tab eventKey={3} title="Switches">
                Tab 3 Content
              </Tab>
            </Tabs>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
