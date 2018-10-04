import React, { Component } from 'react';
import { injectIntl, defineMessages } from 'react-intl';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';

const messages = defineMessages({
  menuListHome: {
    id: 'menu.list.home',
    defaultMessage: 'Home'
  },
  menuListTrending: {
    id: 'menu.list.trending',
    defaultMessage: 'Trending'
  },
  menuListSubscriptions: {
    id: 'menu.list.subscriptions',
    defaultMessage: 'Subscriptions'
  }
});

class MainListItems extends Component {
  render() {
    const {
      intl: { formatMessage }
    } = this.props;

    return (
      <div>
        <ListItem button>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary={formatMessage(messages.menuListHome)} />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <TrendingUpIcon />
          </ListItemIcon>
          <ListItemText primary={formatMessage(messages.menuListTrending)} />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <SubscriptionsIcon />
          </ListItemIcon>
          <ListItemText primary={formatMessage(messages.menuListSubscriptions)} />
        </ListItem>
      </div>
    );
  }
}
export default injectIntl(MainListItems);
