import React, { Component } from 'react';
import Tab from '@material/react-tab';
import TabBar from '@material/react-tab-bar';
import { Cell, Grid, Row } from '@material/react-layout-grid';
import './styles.scss';
import Buttons from './Buttons.jsx';

class App extends React.Component {
  state = {
    activeIndex: 0,
  };

  handleActiveIndexUpdate = (activeIndex) => this.setState({activeIndex});

  render() {

    return (
      <Grid>
        <Row>
          <Cell columns={12}>
            <h1>Material Components Web React</h1>
            <h6>Material SCSS compiled into a CSS file using JavaScript</h6>
          </Cell>
        </Row>
        <Row>
          <Cell columns={12}>
            <TabBar
              activeIndex={this.state.activeIndex}
              handleActiveIndexUpdate={this.handleActiveIndexUpdate}
              >
              <Tab>
                <span>Buttons</span>
              </Tab>
              <Tab>
                <span>Icons</span>
              </Tab>
              <Tab>
                <span>Switches</span>
              </Tab>
            </TabBar>
          </Cell>
        </Row>
        <Row>
          <Cell columns={12}>
            {this.state.activeIndex === 0 && (
              <Buttons />
            )}
            {this.state.activeIndex === 1 && (
              <span>Tab 2 Content</span>
            )}
            {this.state.activeIndex === 2 && (
              <span>Tab 3 Content</span>
            )}
          </Cell>
        </Row>
      </Grid>
    );
  }
}

export default App;
