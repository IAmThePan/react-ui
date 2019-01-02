import React, { Component } from 'react';
import './styles.less';
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
            <h6>Bootstrap LESS compiled into a CSS file using JavaScript</h6>
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
      </Grid>
    );
  }
}

export default App;
