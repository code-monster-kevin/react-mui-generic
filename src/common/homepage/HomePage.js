import React, { Component } from 'react';
import HomeSlider from './HomeSlider';
import BannerLoadingImage from '../../assets/homeslider/bannerloading.jpg';

class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bannercontent: [],
      loadingbanner: true
    };
  }

  componentDidMount() {
    //simulate loading from external source
    import(`../../content/mainslider.json`)
      .then(module => this.setState({ bannercontent: module, loadingbanner: false }))
      .catch(this.setState({ bannercontent: [], loadingbanner: true }));
  }

  render() {
    const { loadingbanner, bannercontent } = this.state;

    return (
      <div id="homepage">
        { loadingbanner ? 
        ( <img src={BannerLoadingImage} alt="banner loading" /> ) :
        ( <HomeSlider content={bannercontent} /> )
        }
      </div>
    );
  }
}

export default HomePage;
