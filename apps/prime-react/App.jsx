import React, { Component } from 'react';
import { TabView, TabPanel } from 'primereact/tabview';
import Buttons from './Buttons.jsx';

class App extends React.Component {
  state = {
    activeIndex: 0,
  };

  render() {

    return (
      <div className="p-grid p-justify-center">
        <div className="p-col-10">
          <h1>Prime React</h1>
        </div>
        <div className="p-col-10">
          <TabView activeIndex={this.state.activeIndex} onTabChange={(e) => this.setState({activeIndex: e.index})}>
            <TabPanel header="Buttons">
              <Buttons />
            </TabPanel>
            <TabPanel header="Icons">
              Tab 2 Content
            </TabPanel>
            <TabPanel header="Slider">
              Tab 3 Content
            </TabPanel>
          </TabView>
        </div>
      </div>
    );
  }
}

export default App;
