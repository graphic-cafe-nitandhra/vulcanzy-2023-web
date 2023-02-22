import React, { Component } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function DemoCarousel(props) {
  let pics = props.src;
  return (
    <Carousel
      autoPlay={true}
      stopOnHover={false}
      infiniteLoop={true}
      showThumbs={false}
      transitionTime={1000}
      showStatus={false}
      axis={props.scroll}
      className={`w-full h-[${props.hei}]`}
    >
      <div>
        <img src={props.src[0]} />
      </div>
      <div>
        <img src={props.src[1]} />
      </div>
      <div>
        <img src={props.src[2]} />
      </div>
      {/* {pics.map(e => {
        return (
          <div>
            <img src={pics[e]} />
          </div>
        );
      })} */}
    </Carousel>
  );
}
export default DemoCarousel;
