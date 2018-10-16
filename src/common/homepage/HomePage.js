import React, { Component } from 'react';
import HomeSlider from './HomeSlider';

const content = [
  {
    title: 'Vulputate Mollis Ultricies',
    description:
      'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.',
    button: 'Read More',
    image: 'https://i.imgur.com/ZXBtVw7.jpg',
    user: 'Luan Gjokaj',
    userProfile: 'https://i.imgur.com/JSW6mEk.png'
  },
  {
    title: 'Tortor Dapibus Commodo',
    description:
      'Nullam id dolor id nibh ultricies vehicula ut id elit. Cras mattis consectetur purus sit amet fermentum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec sed odio dui.',
    button: 'Discover',
    image: 'https://i.imgur.com/DCdBXcq.jpg',
    user: 'Erich Behrens',
    userProfile: 'https://i.imgur.com/0Clfnu7.png'
  },
  {
    title: 'Phasellus volutpat metus',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam.',
    button: 'Buy now',
    image: 'https://i.imgur.com/DvmN8Hx.jpg',
    user: 'Bruno Vizovskyy',
    userProfile: 'https://i.imgur.com/4KeKvtH.png'
  }
];

class HomePage extends Component {
  render() {
    return <HomeSlider content={content} />;
  }
}

export default HomePage;
