import React, { Component } from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import GroupIcon from '@material-ui/icons/GroupWork';

class CategoryListItems extends Component {
  render() {
    return (
      <div>
        {this.props.listitems.map((item, index) => (
          <ListItem key={item.key} button>
            <ListItemIcon>
              <GroupIcon />
            </ListItemIcon>
            <ListItemText primary={item.title} />
          </ListItem>
        ))}
      </div>
    );
  }
}
export default CategoryListItems;
