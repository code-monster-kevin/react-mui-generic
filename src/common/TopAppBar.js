import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { injectIntl, defineMessages } from 'react-intl';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import InputBase from '@material-ui/core/InputBase';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Button from '@material-ui/core/Button';
import Hidden from '@material-ui/core/Hidden';
import MenuIcon from '@material-ui/icons/Menu';
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
import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/Notifications';
import FlagUSIcon from '../assets/flags/FlagUSIcon';
import FlagCNIcon from '../assets/flags/FlagCNIcon';
import RemyAvatar from '../assets/remy.jpg';
import VucadiIcon from '../assets/vucadi_logo_128.png';

const messages = defineMessages({
  menuTitleSm: {
    id: 'menu.title.sm',
    defaultMessage: 'MUI Marketplace'
  },
  menuTitleXs: {
    id: 'menu.title.xs',
    defaultMessage: 'MUI'
  },
  menuSearchLabel: {
    id: 'menu.search.label',
    defaultMessage: 'Search...'
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

const styles = theme => ({
  root: {
    width: '100%'
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginLeft: 0,
    marginTop: 8,
    width: '100%',
    height: '80%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing.unit,
      width: 'auto'
    }
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputRoot: {
    color: 'inherit',
    width: '100%'
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 120,
      '&:focus': {
        width: 200
      }
    }
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

  handleSearch = event => {
    console.log(event);
    if (event.key === 'Enter') {
      console.log('search', event.target.value);
    }
  };

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
    const { classes } = this.props;
    const { menuOpen } = this.state;

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <div>
              <IconButton
                className={classes.menuButton}
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
                  <img src={VucadiIcon} alt="Vucadi" width="25" height="25" />
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
                <Hidden xsDown>
                  <div className={classes.grow} />
                  <div className={classes.search}>
                    <div className={classes.searchIcon}>
                      <SearchIcon />
                    </div>
                    <InputBase
                      placeholder={formatMessage(messages.menuSearchLabel)}
                      classes={{
                        root: classes.inputRoot,
                        input: classes.inputInput
                      }}
                      onChange={this.handleSearch}
                    />
                  </div>
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
                </Hidden>
                {this.props.authenticated ? (
                  <span style={{ display: 'flex' }}>
                    <Hidden xsDown>
                      <IconButton color="inherit">
                        <Badge className={classes.margin} badgeContent={17} color="secondary">
                          <NotificationsIcon />
                        </Badge>
                      </IconButton>
                      <Button
                        style={isActive(history, '/signout')}
                        onClick={() => this.props.signOut()}
                      >
                        {formatMessage(messages.menuSignOut)}
                      </Button>
                    </Hidden>
                    <Avatar alt="Remy Sharp" src={RemyAvatar} />
                  </span>
                ) : (
                  <span style={{ display: 'flex' }}>
                    <Hidden xsDown>
                      <Button
                        style={isActive(history, '/signup')}
                        onClick={() => this.props.signUp()}
                      >
                        {formatMessage(messages.menuSignUp)}
                      </Button>
                    </Hidden>
                    <Hidden xsDown>
                      <Button
                        style={isActive(history, '/signin')}
                        onClick={() => this.props.signIn()}
                      >
                        {formatMessage(messages.menuSignIn)}
                      </Button>
                    </Hidden>
                  </span>
                )}
              </span>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

TopAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
  authenticated: PropTypes.bool.isRequired,
  handleMenuClick: PropTypes.func.isRequired,
  handleChangeLocale: PropTypes.func.isRequired,
  signOut: PropTypes.func.isRequired,
  signIn: PropTypes.func.isRequired,
  signUp: PropTypes.func.isRequired
};

export default injectIntl(withRouter(withStyles(styles)(TopAppBar)));
