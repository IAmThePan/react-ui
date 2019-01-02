import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Icon,
  IconButton,
  Tab,
  Tabs,
  Toolbar,
  Typography,
} from '@material-ui/core';
import Buttons from './Buttons.jsx';

const TabContainer = (props) => (
  <Typography component="div" style={{ padding: 8 * 3 }}>
    {props.children}
  </Typography>
);

const styles = theme => ({
  root: {
    width: '100%',
  },
  appBar: {
    backgroundColor: '#2ea5ed',
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 0,
  },
  tabs: {
    marginTop: -45,
  },
});

class App extends React.Component {
  state = {
    value: 0,
  };

  _handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <h1>React Material-UI 3</h1>
        <h6>Material-UI with Buttons, Tabs, Icons, and Custom Styles</h6>
        <AppBar className={classes.appBar} position="static">
          <Toolbar>
            <IconButton className={classes.menuButton} color="inherit">
              <Icon>
                keyboard_arrow_left
              </Icon>
            </IconButton>
            <Typography variant="h6" color="inherit">
              Ghostery
            </Typography>
            <div className={classes.grow} />
            <IconButton color="inherit">
              <Icon>
                person_outline
              </Icon>
            </IconButton>
            <IconButton color="inherit">
              <Icon>
                more_vert
              </Icon>
            </IconButton>
          </Toolbar>
          <Tabs
            className={classes.tabs}
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
        </AppBar>
        {value === 0 && <TabContainer><Buttons /></TabContainer>}
        {value === 1 && <TabContainer>Item Two</TabContainer>}
        {value === 2 && <TabContainer>Item Three</TabContainer>}
      </div>
    );
  }
}

export default withStyles(styles)(App);
