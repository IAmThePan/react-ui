import React, { Component } from 'react';
import classNames from 'classnames';
import {
  createMuiTheme,
  MuiThemeProvider,
  withStyles,
} from '@material-ui/core/styles';
import {
  green,
  purple,
} from '@material-ui/core/colors/';
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
      <div>
        <div>
          <h4>Variants</h4>
          <Button className={classes.button}>
            Default
          </Button>
          <Button variant="text" className={classes.button}>
            Text
          </Button>
          <Button variant="outlined" className={classes.button}>
            Outlined
          </Button>
          <Button variant="contained" className={classes.button}>
            Contained
          </Button>
        </div>
        <div>
          <h4>Sizes (Contained)</h4>
          <Button variant="contained" className={classes.button}>
            Default
          </Button>
          <Button size="small" variant="contained" className={classes.button}>
            Small
          </Button>
          <Button size="medium" variant="contained" className={classes.button}>
            Medium
          </Button>
          <Button size="large" variant="contained" className={classes.button}>
            Large
          </Button>
        </div>
        <div>
          <h4>Ripple (Outlined)</h4>
          <Button variant="outlined" className={classes.button}>
            Default
          </Button>
          <Button disableRipple variant="outlined" className={classes.button}>
            Disabled Ripple
          </Button>
        </div>
        <div>
          <h4>Disabled (Contained)</h4>
          <Button variant="contained" className={classes.button}>
            Default
          </Button>
          <Button disabled variant="contained" className={classes.button}>
            Disabled
          </Button>
        </div>
        <div>
          <h4>Colors (Outlined)</h4>
          <Button variant="outlined" className={classes.button}>
            Default
          </Button>
          <Button color="inherit" variant="outlined" className={classes.button}>
            Inherit
          </Button>
          <Button color="primary" variant="outlined" className={classes.button}>
            Primary
          </Button>
          <Button color="secondary" variant="outlined" className={classes.button}>
            Secondary
          </Button>
          <Button color="primary" variant="outlined" className={classNames(classes.button, classes.purpleOutlined)}>
            Custom Purple
          </Button>
          <MuiThemeProvider theme={theme}>
            <Button color="primary" variant="outlined" className={classes.button}>
              Custom Green
            </Button>
          </MuiThemeProvider>
        </div>
        <div>
          <h4>Colors (contained)</h4>
          <Button variant="contained" className={classes.button}>
            Default
          </Button>
          <Button color="inherit" variant="contained" className={classes.button}>
            Inherit
          </Button>
          <Button color="primary" variant="contained" className={classes.button}>
            Primary
          </Button>
          <Button color="secondary" variant="contained" className={classes.button}>
            Secondary
          </Button>
          <Button color="primary" variant="contained" className={classNames(classes.button, classes.purpleContained)}>
            Custom Purple
          </Button>
          <MuiThemeProvider theme={theme}>
            <Button color="primary" variant="contained" className={classes.button}>
              Custom Green
            </Button>
          </MuiThemeProvider>
        </div>
      </div>
    );
  }
};

export default withStyles(styles)(Buttons);
