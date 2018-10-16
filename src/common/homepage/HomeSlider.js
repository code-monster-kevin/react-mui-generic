import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import 'normalize.css/normalize.css';
import './slider-animations.css';
import './slider-styles.css';

const HomeSlider = props => {
  return (
    <Slider className="slider-wrapper">
      {props.content.map((item, index) => (
        <div
          key={index}
          className="slider-content"
          style={{ background: `url('${item.image}') no-repeat center center` }}
        >
          <div className="inner">
            <h1>{item.title}</h1>
            <p>{item.description}</p>
            <button>{item.button}</button>
          </div>
          <section>
            <img src={item.userProfile} alt={item.user} />
            <span>
              Posted by <strong>{item.user}</strong>
            </span>
          </section>
        </div>
      ))}
    </Slider>
  );
};

HomeSlider.propTypes = {
  content: PropTypes.array.isRequired
};

export default HomeSlider;
