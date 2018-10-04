import React, { Component } from 'react';
import { injectIntl, defineMessages } from 'react-intl';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import SettingsIcon from '@material-ui/icons/Settings';
import HearingIcon from '@material-ui/icons/Hearing';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import AssignmentLateIcon from '@material-ui/icons/AssignmentLate';

const messages = defineMessages({
  menuListSettings: {
    id: 'menu.list.settings',
    defaultMessage: 'Settings'
  },
  menuListFeedback: {
    id: 'menu.list.feedback',
    defaultMessage: 'Send Feedback'
  },
  menuListHelp: {
    id: 'menu.list.help',
    defaultMessage: 'Help'
  },
  menuListBugs: {
    id: 'menu.list.bugs',
    defaultMessage: 'Report Bugs'
  }
});

class FooterListItems extends Component {
  render() {
    const {
      intl: { formatMessage }
    } = this.props;

    return (
      <div>
        <ListItem button>
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText primary={formatMessage(messages.menuListSettings)} />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <HearingIcon />
          </ListItemIcon>
          <ListItemText primary={formatMessage(messages.menuListFeedback)} />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <ContactSupportIcon />
          </ListItemIcon>
          <ListItemText primary={formatMessage(messages.menuListHelp)} />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <AssignmentLateIcon />
          </ListItemIcon>
          <ListItemText primary={formatMessage(messages.menuListBugs)} />
        </ListItem>
      </div>
    );
  }
}
export default injectIntl(FooterListItems);
