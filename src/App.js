import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import TopAppBar from './common/TopAppBar';
import LeftMenuDrawer from './common/LeftMenuDrawer';
import Footer from './common/Footer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { authenticated: false, leftMenuOpen: false };
  }

  signIn = () => {
    console.log('sign in');
    this.setState({ authenticated: true });
  };

  signOut = () => {
    console.log('sign out');
    this.setState({ authenticated: false });
  };

  signUp = () => {
    console.log('sign up');
  };

  handleMenuClick = () => {
    this.setState(state => ({ leftMenuOpen: !state.leftMenuOpen }));
  };

  render() {
    return (
      <BrowserRouter>
        <div>
          <TopAppBar
            authenticated={this.state.authenticated}
            signIn={this.signIn}
            signOut={this.signOut}
            signUp={this.signUp}
            handleChangeLocale={this.props.handleChangeLocale}
            handleMenuClick={this.handleMenuClick}
          />
          <LeftMenuDrawer open={this.state.leftMenuOpen} handleMenuClick={this.handleMenuClick} />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
