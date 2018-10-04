import React, { Component } from 'react';
import { injectIntl, defineMessages } from 'react-intl';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import Divider from '@material-ui/core/Divider';
import MainListItems from './leftmenu/MainListItems';
import LibraryListItems from './leftmenu/LibraryListItems';
import CategoryListItems from './leftmenu/CategoryListItems';
import FooterListItems from './leftmenu/FooterListItems';

const messages = defineMessages({
  menuListSubHeaderLibrary: {
    id: 'menu.list.subheader.library',
    defaultMessage: 'LIBRARY'
  },
  menuListSubHeaderCategory: {
    id: 'menu.list.subheader.category',
    defaultMessage: 'CATEGORIES'
  }
});

class LeftMenuDrawer extends Component {
  render() {
    const {
      intl: { formatMessage }
    } = this.props;

    return (
      <Drawer open={this.props.open} onClose={this.props.handleMenuClick}>
        <div
          tabIndex={0}
          role="button"
          onClick={this.props.handleMenuClick}
          onKeyDown={this.props.handleMenuClick}
        >
          <div>
            <List>
              <MainListItems />
            </List>
            <Divider />
            <List
              component="nav"
              subheader={
                <ListSubheader component="div">
                  {formatMessage(messages.menuListSubHeaderLibrary)}
                </ListSubheader>
              }
            >
              <LibraryListItems />
            </List>
            <Divider />
            <List
              component="nav"
              subheader={
                <ListSubheader component="div">
                  {formatMessage(messages.menuListSubHeaderCategory)}
                </ListSubheader>
              }
            >
              <CategoryListItems />
            </List>
            <Divider />
            <List>
              <FooterListItems />
            </List>
          </div>
        </div>
      </Drawer>
    );
  }
}

export default injectIntl(LeftMenuDrawer);
