import React from "react";
import "./css/Slider.css";

const Slider = () => {
  return (
    <section className="containair">
      <div className="slider-wrapper">
        <h1 className="sliderh1">best seller</h1>
        <div className="slider">
          <img
            className="ui fluid image"
            id="slide-1"
            src="https://as2.ftcdn.net/v2/jpg/01/92/42/01/1000_F_192420197_qMAdrrtk488qj0vKN8522N9oZletVuIB.jpg"
            alt="1"
          />
          <img
            id="slide-2"
            src="https://as2.ftcdn.net/v2/jpg/01/92/42/01/1000_F_192420197_qMAdrrtk488qj0vKN8522N9oZletVuIB.jpg"
            alt="2"
          />
          <img
            id="slide-3"
            src="https://as2.ftcdn.net/v2/jpg/01/92/42/01/1000_F_192420197_qMAdrrtk488qj0vKN8522N9oZletVuIB.jpg"
            alt="3"
          />
        </div>
        <div className="slider-nav">
          <a href="#slide-1"></a>
          <a href="#slide-2"></a>
          <a href="#slide-3"></a>
        </div>
      </div>
    </section>
  );
};

export default Slider;
