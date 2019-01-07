import React, { Component } from 'react';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import withStyles from '@material-ui/core/styles/withStyles';
import green from '@material-ui/core/colors/green';
import purple from '@material-ui/core/colors/purple';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  purpleOutlined: {
    color: purple[500],
    borderColor: purple[200],
    '&:hover': {
      borderColor: purple[500],
      backgroundColor: purple[40],
    },
  },
  purpleContained: {
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    '&:hover': {
      backgroundColor: purple[700],
    },
  },
});

const theme = createMuiTheme({
  palette: {
    primary: green,
  },
  typography: {
    useNextVariants: true,
  },
});

class Buttons extends React.Component {

  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <h3>Button Colors</h3>
        <div>
          <Button className={classes.button} variant="text">Text</Button>
          <Button className={classes.button} variant="text" color="primary">Primary</Button>
          <Button className={classes.button} variant="text" color="secondary">Secondary</Button>
          <Button className={classes.button} variant="outlined">Outlined</Button>
          <Button className={classes.button} variant="outlined" color="primary">Primary</Button>
          <Button className={classes.button} variant="outlined" color="secondary">Secondary</Button>
          <Button className={`${classes.button} ${classes.purpleOutlined}`} variant="outlined" color="primary">Custom Purple</Button>
          <MuiThemeProvider theme={theme}>
            <Button className={classes.button} variant="outlined" color="primary">Custom Green</Button>
          </MuiThemeProvider>
          <Button className={classes.button} variant="contained">Contained</Button>
          <Button className={classes.button} variant="contained" color="primary">Primary</Button>
          <Button className={classes.button} variant="contained" color="secondary">Secondary</Button>
          <Button className={`${classes.button} ${classes.purpleContained}`} variant="contained" color="primary">Custom Purple</Button>
          <MuiThemeProvider theme={theme}>
            <Button className={classes.button} variant="contained" color="primary">Custom Green</Button>
          </MuiThemeProvider>
        </div>
        <h3>Button Sizes</h3>
        <div>
          <Button className={classes.button} size="small">Small</Button>
          <Button className={classes.button} size="medium">Medium</Button>
          <Button className={classes.button} size="large">Large</Button>
          <Button className={classes.button} variant="outlined" color="primary" size="small">Small</Button>
          <Button className={classes.button} variant="outlined" color="primary" size="medium">Medium</Button>
          <Button className={classes.button} variant="outlined" color="primary" size="large">Large</Button>
          <Button className={classes.button} variant="contained" color="secondary" size="small">Small</Button>
          <Button className={classes.button} variant="contained" color="secondary" size="medium">Medium</Button>
          <Button className={classes.button} variant="contained" color="secondary" size="large">Large</Button>
        </div>
        <h3>Disabled</h3>
        <div>
          <Button className={classes.button}>Default</Button>
          <Button className={classes.button} disabled>Disabled</Button>
          <Button className={classes.button} disableRipple>Ripple Disabled</Button>
          <Button className={classes.button} variant="outlined" color="primary">Default</Button>
          <Button className={classes.button} variant="outlined" color="primary" disabled>Disabled</Button>
          <Button className={classes.button} variant="outlined" color="primary" disableRipple>Ripple Disabled</Button>
          <MuiThemeProvider theme={theme}>
            <Button className={classes.button} variant="contained" color="primary">Default</Button>
          </MuiThemeProvider>
          <MuiThemeProvider theme={theme}>
            <Button className={classes.button} variant="contained" color="primary" disabled>Disabled</Button>
          </MuiThemeProvider>
          <MuiThemeProvider theme={theme}>
            <Button className={classes.button} variant="contained" color="primary" disableRipple>Ripple Disabled</Button>
          </MuiThemeProvider>
        </div>
      </React.Fragment>
    );
  }
};

export default withStyles(styles)(Buttons);
