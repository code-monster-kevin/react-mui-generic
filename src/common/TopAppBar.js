import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { injectIntl, defineMessages } from 'react-intl';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Hidden from '@material-ui/core/Hidden';
import HomeIcon from '@material-ui/icons/Home';
import MenuIcon from '@material-ui/icons/Menu';
import SignInIcon from '@material-ui/icons/Input';
import SignUpIcon from '@material-ui/icons/AssignmentInd';
import SignOutIcon from '@material-ui/icons/ExitToApp';
import { Link, withRouter } from 'react-router-dom';
import Popper from '@material-ui/core/Popper';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Avatar from '@material-ui/core/Avatar';
import FlagUSIcon from '../assets/flags/FlagUSIcon';
import FlagCNIcon from '../assets/flags/FlagCNIcon';
import RemyAvatar from '../assets/remy.jpg';

const messages = defineMessages({
  menuTitleSm: {
    id: 'menu.title.sm',
    defaultMessage: 'MUI Marketplace'
  },
  menuTitleXs: {
    id: 'menu.title.xs',
    defaultMessage: 'MUI'
  },
  menuSignOut: {
    id: 'menu.signout',
    defaultMessage: 'Sign Out'
  },
  menuSignIn: {
    id: 'menu.signin',
    defaultMessage: 'Sign In'
  },
  menuSignUp: {
    id: 'menu.signup',
    defaultMessage: 'Sign Up'
  },
  dialogLanguageSelect: {
    id: 'dialog.language.select',
    defaultMessage: 'Select Language'
  }
});

const isActive = (history, path) => {
  if (history.location.pathname === path) return { color: '#bef67a' };
  else return { color: '#ffffff' };
};

class TopAppBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locale: localStorage.getItem('app.locale') || 'en',
      menuOpen: false,
      localeOpen: false
    };
  }

  handleLocaleOpen = () => {
    this.setState({ localeOpen: true });
  };

  handleLocaleClose = () => {
    this.setState({ localeOpen: false });
  };

  handleListItemClick = (event, value) => {
    this.props.handleChangeLocale(value);
    this.handleLocaleClose();
  };

  render() {
    const {
      history,
      intl: { formatMessage }
    } = this.props;
    const { menuOpen } = this.state;

    return (
      <AppBar position="static">
        <Toolbar>
          <div>
            <IconButton
              aria-owns={menuOpen ? 'menu-list' : null}
              aria-haspopup="true"
              onClick={this.props.handleMenuClick}
              color="inherit"
              aria-label="Menu"
            >
              <MenuIcon />
            </IconButton>
            <Link to="/" style={{ textDecoration: 'none' }}>
              <IconButton aria-label="Home" style={isActive(history, '/')}>
                <HomeIcon />
              </IconButton>
            </Link>
          </div>
          <Hidden xsDown>
            <Typography type="title" color="inherit">
              {formatMessage(messages.menuTitleSm)}
            </Typography>
          </Hidden>
          <Hidden smUp>
            <Typography type="title" color="inherit">
              {formatMessage(messages.menuTitleXs)}
            </Typography>
          </Hidden>
          <div style={{ position: 'absolute', right: '10px' }}>
            <span style={{ float: 'right', display: 'flex', justifyContent: 'center' }}>
              <IconButton
                buttonRef={node => {
                  this.anchorEl = node;
                }}
                onClick={this.handleLocaleOpen}
              >
                {this.state.locale === 'zh' ? <FlagCNIcon /> : <FlagUSIcon />}
              </IconButton>
              <Popper
                open={this.state.localeOpen}
                anchorEl={this.anchorEl}
                transition
                disablePortal
                style={{ zIndex: '100' }}
              >
                {({ TransitionProps, placement }) => (
                  <Grow
                    {...TransitionProps}
                    id="menu-list"
                    style={{
                      transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom'
                    }}
                  >
                    <Paper>
                      <ClickAwayListener onClickAway={this.handleLocaleClose}>
                        <List
                          subheader={
                            <ListSubheader>
                              {formatMessage(messages.dialogLanguageSelect)}
                            </ListSubheader>
                          }
                        >
                          <ListItem
                            button
                            selected={this.state.locale === 'en'}
                            onClick={event => this.handleListItemClick(event, 'en')}
                          >
                            <ListItemIcon>
                              <FlagUSIcon />
                            </ListItemIcon>
                            <ListItemText primary="English" />
                          </ListItem>
                          <ListItem
                            button
                            selected={this.state.locale === 'zh'}
                            onClick={event => this.handleListItemClick(event, 'zh')}
                          >
                            <ListItemIcon>
                              <FlagCNIcon />
                            </ListItemIcon>
                            <ListItemText primary="中文" />
                          </ListItem>
                        </List>
                      </ClickAwayListener>
                    </Paper>
                  </Grow>
                )}
              </Popper>
              {this.props.authenticated ? (
                <span style={{ display: 'flex' }}>
                  <Hidden xsDown>
                    <Button
                      style={isActive(history, '/signout')}
                      onClick={() => this.props.signOut()}
                    >
                      {formatMessage(messages.menuSignOut)}
                    </Button>
                  </Hidden>
                  <Hidden smUp>
                    <IconButton
                      aria-label="ExitToApp"
                      style={isActive(history, '/signout')}
                      onClick={() => this.props.signOut()}
                    >
                      <SignOutIcon />
                    </IconButton>
                  </Hidden>
                  <Avatar style={{ width: '50', height: '50' }} alt="Remy Sharp" src={RemyAvatar} />
                </span>
              ) : (
                <span>
                  <Link to="/signup" style={{ textDecoration: 'none' }}>
                    <Hidden xsDown>
                      <Button
                        style={isActive(history, '/signup')}
                        onClick={() => this.props.signUp()}
                      >
                        {formatMessage(messages.menuSignUp)}
                      </Button>
                    </Hidden>
                    <Hidden smUp>
                      <IconButton
                        aria-label="AssignmentInd"
                        style={isActive(history, '/signup')}
                        onClick={() => this.props.signUp()}
                      >
                        <SignUpIcon />
                      </IconButton>
                    </Hidden>
                  </Link>
                  <Hidden xsDown>
                    <Button
                      style={isActive(history, '/signin')}
                      onClick={() => this.props.signIn()}
                    >
                      {formatMessage(messages.menuSignIn)}
                    </Button>
                  </Hidden>
                  <Hidden smUp>
                    <IconButton
                      aria-label="Input"
                      style={isActive(history, '/signin')}
                      onClick={() => this.props.signIn()}
                    >
                      <SignInIcon />
                    </IconButton>
                  </Hidden>
                </span>
              )}
            </span>
          </div>
        </Toolbar>
      </AppBar>
    );
  }
}

TopAppBar.propTypes = {
  authenticated: PropTypes.bool,
  handleMenuClick: PropTypes.func,
  handleChangeLocale: PropTypes.func,
  signOut: PropTypes.func,
  signIn: PropTypes.func,
  signUp: PropTypes.func
};

export default injectIntl(withRouter(TopAppBar));
