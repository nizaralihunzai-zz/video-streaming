import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  navtabs: {
    border:'none',
    textTransform:'inherit',
    background:'transparent',
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
      borderBottom: '2px solid rgb(72, 72, 72)',
    },
    
    fontSize:'14px',
    fontWeight:'600',
    color:'rgb(72, 72, 72)',
    height:'70px',
    borderRadius:'0px',
    marginRight:'10px',
    letterSpacing: '0.6px',
  },
  
  navtab_link: {
    textDecoration:'none !important',
    color:'rgb(72, 72, 72) !important',
    
  },

  root: {
    width: '100%',
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  title: {
    display: 'none',
    color: 'rgb(72, 72, 72) !important',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },

});

class Navbar extends React.Component {

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="fixed" style={{ backgroundColor: "white" }} >
          <Toolbar>
            <Typography className={classes.title} variant="h6" color="secondary" noWrap>
              Video Streaming
            </Typography>
            
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

Navbar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Navbar);
