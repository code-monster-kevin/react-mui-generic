import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Icon from '@material-ui/core/Icon';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';

class Footer extends Component {
  state = {
    value: 'recents'
  };
  handleChange = (event, value) => {
    this.setState({ value });
    console.log('Footer.handleChange', value);
  };

  render() {
    const { value } = this.state;

    return (
      <div>
        <Grid container spacing={24}>
          <Grid item xs={12} sm={4}>
            <Paper>xs=12 sm=4</Paper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Paper>xs=12 sm=4</Paper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Paper>xs=12 sm=4</Paper>
          </Grid>
          <Grid item xs={12}>
            <BottomNavigation value={value} onChange={this.handleChange}>
              <BottomNavigationAction label="Recents" value="recents" icon={<RestoreIcon />} />
              <BottomNavigationAction label="Favorites" value="favorites" icon={<FavoriteIcon />} />
              <BottomNavigationAction label="Nearby" value="nearby" icon={<LocationOnIcon />} />
              <BottomNavigationAction label="Folder" value="folder" icon={<Icon>FOL</Icon>} />
            </BottomNavigation>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Footer;
