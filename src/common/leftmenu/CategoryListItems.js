import React, { Component } from 'react';
import { injectIntl, defineMessages } from 'react-intl';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import GroupIcon from '@material-ui/icons/GroupWork';

const messages = defineMessages({
  menuListUI: {
    id: 'menu.list.ui',
    defaultMessage: 'User Interface'
  },
  menuListAPI: {
    id: 'menu.list.api',
    defaultMessage: 'API Development'
  },
  menuListDB: {
    id: 'menu.list.db',
    defaultMessage: 'Database'
  },
  menuListDevop: {
    id: 'menu.list.devop',
    defaultMessage: 'Dev Ops'
  }
});

class CategoryListItems extends Component {
  render() {
    const {
      intl: { formatMessage }
    } = this.props;

    return (
      <div>
        <ListItem button>
          <ListItemIcon>
            <GroupIcon />
          </ListItemIcon>
          <ListItemText primary={formatMessage(messages.menuListUI)} />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <GroupIcon />
          </ListItemIcon>
          <ListItemText primary={formatMessage(messages.menuListAPI)} />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <GroupIcon />
          </ListItemIcon>
          <ListItemText primary={formatMessage(messages.menuListDB)} />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <GroupIcon />
          </ListItemIcon>
          <ListItemText primary={formatMessage(messages.menuListDevop)} />
        </ListItem>
      </div>
    );
  }
}
export default injectIntl(CategoryListItems);
