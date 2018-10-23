import React, { Component } from 'react';
import HomeSlider from './HomeSlider';
import BannerLoadingImage from '../../assets/homeslider/bannerloading.jpg';
import CardGrid from '../grids/CardGrid';

class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bannercontent: [],
      categories: [],
      loadingbanner: true
    };
  }

  componentDidMount() {
    const locale = localStorage.getItem('app.locale');
    //simulate loading from external source
    import(`../../content/${locale}/mainslider.json`)
      .then(module => this.setState({ bannercontent: module, loadingbanner: false }))
      .catch(this.setState({ bannercontent: [], loadingbanner: true }));

    import(`../../content/${locale}/menujobcategory.json`)
      .then(module => this.setState({ categories: module }))
      .catch(this.setState({ categories: [] }));
  }

  render() {
    const { loadingbanner, bannercontent, categories } = this.state;

    return (
      <div id="homepage">
        {loadingbanner ? (
          <img src={BannerLoadingImage} alt="banner loading" />
        ) : (
          <HomeSlider content={bannercontent} />
        )}
        <br />
        {categories && <CardGrid content={categories} />}
        <br />
      </div>
    );
  }
}

export default HomePage;
