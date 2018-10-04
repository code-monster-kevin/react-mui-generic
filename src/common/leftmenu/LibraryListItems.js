import React, { Component } from 'react';
import { injectIntl, defineMessages } from 'react-intl';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import RestoreIcon from '@material-ui/icons/Restore';
import VisibilityIcon from '@material-ui/icons/Visibility';
import TOCIcon from '@material-ui/icons/Toc';
import FavoriteIcon from '@material-ui/icons/Favorite';

const messages = defineMessages({
  menuListHistory: {
    id: 'menu.list.history',
    defaultMessage: 'History'
  },
  menuListWatchlist: {
    id: 'menu.list.watchlist',
    defaultMessage: 'Watch List'
  },
  menuListLiked: {
    id: 'menu.list.liked',
    defaultMessage: 'Liked Videos'
  },
  menuListPlaylist: {
    id: 'menu.list.playlist',
    defaultMessage: 'Playlists'
  }
});

class LibraryListItems extends Component {
  render() {
    const {
      intl: { formatMessage }
    } = this.props;

    return (
      <div>
        <ListItem button>
          <ListItemIcon>
            <RestoreIcon />
          </ListItemIcon>
          <ListItemText primary={formatMessage(messages.menuListHistory)} />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <VisibilityIcon />
          </ListItemIcon>
          <ListItemText primary={formatMessage(messages.menuListWatchlist)} />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <FavoriteIcon />
          </ListItemIcon>
          <ListItemText primary={formatMessage(messages.menuListLiked)} />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <TOCIcon />
          </ListItemIcon>
          <ListItemText primary={formatMessage(messages.menuListPlaylist)} />
        </ListItem>
      </div>
    );
  }
}
export default injectIntl(LibraryListItems);
