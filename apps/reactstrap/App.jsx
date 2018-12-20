import React, { Component } from 'react';
import {
  Container,
  Row,
  Col,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
} from 'reactstrap';
import classnames from 'classnames';
import Buttons from './Buttons.jsx';

class App extends React.Component {
  state = {
    activeTab: '1',
  };

  _toggleTab = (tab) => {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab,
      });
    }
  }

  render() {
    const { activeTab } = this.state;

    return (
      <Container>
        <Row>
          <Col>
            <h1>ReactStrap (Bootstrap Version 4)</h1>
            <Nav tabs>
              <NavItem>
                <NavLink
                  className={classnames({ active: activeTab === '1' })}
                  onClick={() => { this._toggleTab('1'); }}
                  >
                  Buttons
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({ active: activeTab === '2' })}
                  onClick={() => { this._toggleTab('2'); }}
                  >
                  Icons
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({ active: activeTab === '3' })}
                  onClick={() => { this._toggleTab('3'); }}
                  >
                  Switches
                </NavLink>
              </NavItem>
            </Nav>
            <TabContent activeTab={activeTab}>
              <TabPane tabId="1">
                <Buttons />
              </TabPane>
              <TabPane tabId="2">
                <div>Tab 2 Content</div>
              </TabPane>
              <TabPane tabId="3">
                <div>Tab 3 Content</div>
              </TabPane>
            </TabContent>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
