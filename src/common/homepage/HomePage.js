import React, { Component } from 'react';
import HomeSlider from './HomeSlider';
import BannerLoadingImage from '../../assets/homeslider/bannerloading.jpg';

const defaultcontent = [
  {
    title: 'Loading content',
    description: 'Retrieving data from server. Please stand by...',
    button: '',
    image: BannerLoadingImage,
    user: '',
    userProfile: ''
  }
];

class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bannercontent: defaultcontent
    };
  }

  componentDidMount() {
    //simulate loading from external source
    import(`../../content/mainslider.json`)
      .then(module => this.setState({ bannercontent: module }))
      .catch(this.setState({ bannercontent: defaultcontent }));
  }

  render() {
    return (
      <div id="homepage">
        <HomeSlider content={this.state.bannercontent} />
      </div>
    );
  }
}

export default HomePage;
