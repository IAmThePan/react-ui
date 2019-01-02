import React, { Component } from 'react';
import { Grid, GridCell } from '@rmwc/grid';
import { TabBar, Tab } from '@rmwc/tabs';
import './styles.scss';
import Buttons from './Buttons.jsx';

class App extends React.Component {
  state = {
    activeTab: 0,
  };

  render() {
    const { activeTab } = this.state;

    return (
      <Grid>
        <GridCell span="12">
          <h1>RMWC</h1>
          <h6>Material CSS compiled and imported using JavaScript</h6>
        </GridCell>
        <GridCell span="12">
          <TabBar activeTabIndex={activeTab} onActivate={e => this.setState({activeTab: e.detail.index})}>
            <Tab>Buttons</Tab>
            <Tab>Icons</Tab>
            <Tab>Switches</Tab>
          </TabBar>
        </GridCell>
        <GridCell span="12">
          {activeTab === 0 && (<Buttons />)}
          {activeTab === 1 && (<div>Tab 2 Content</div>)}
          {activeTab === 2 && (<div>Tab 3 Content</div>)}
        </GridCell>
      </Grid>
    );
  }
}

export default App;
