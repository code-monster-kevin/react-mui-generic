import React from 'react';
import Slider from 'react-animated-slider';
import horizontalCss from 'react-animated-slider/build/horizontal.css';
import Image1 from '../../assets/homeslider/DCdBXcq.jpg';
import Image2 from '../../assets/homeslider/DvmN8Hx.jpg';
import Image3 from '../../assets/homeslider/ZXBtVw7.jpg';

const HomeSlider = () => {
  return (
    <Slider classNames={horizontalCss}>
      <div key="1" style={{ background: `url('${Image1}') no-repeat center center` }}>
        <div className="center">
          <h2>Slide Title One</h2>
          <div>Description of Slide One</div>
          <button>Read More</button>
        </div>
      </div>
      <div key="2" style={{ background: `url('${Image2}') no-repeat center center` }}>
        <div className="center">
          <h2>Slide Title Two</h2>
          <div>Some words here to fill up this space</div>
        </div>
      </div>
      <div key="3" style={{ background: `url('${Image3}') no-repeat center center` }}>
        <div className="center">
          <h2>Slide Title Three</h2>
          <div>Things to say about the slides here</div>
        </div>
      </div>
    </Slider>
  );
};

export default HomeSlider;
