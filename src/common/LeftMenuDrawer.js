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
    defaultMessage: 'BY JOB CATEGORY'
  }
});

class LeftMenuDrawer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      jobcategorieslist: [],
      loadingbanner: true
    };
  }

  componentDidMount() {
    const locale = localStorage.getItem('app.locale');

    //simulate loading from external source
    import(`../content/${locale}/menujobcategory.json`)
      .then(module => this.setState({ jobcategorieslist: module }))
      .catch(this.setState({ jobcategorieslist: [] }));
  }

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
            {this.state.jobcategorieslist && (
              <div>
                <Divider />
                <List
                  component="nav"
                  subheader={
                    <ListSubheader component="div">
                      {formatMessage(messages.menuListSubHeaderCategory)}
                    </ListSubheader>
                  }
                >
                  <CategoryListItems listitems={this.state.jobcategorieslist} />
                </List>
              </div>
            )}
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
