import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ClientReview from './ClientReview';
import './styles/TestimonialSider.css'; // Linking the vanilla CSS file

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1
  }
};

const TestimonialSider = () => {
  return (
    <Carousel
      additionalTransfrom={0}
      arrows={true}
      autoPlay={true}
      autoPlaySpeed={5000}
      centerMode={false}
      infinite
      responsive={responsive}
      itemClass="item" // Apply this class for individual carousel items
    >
      {/* Client Review Components */}
      <ClientReview image="/images/c1.jpeg" name="Sajal Talukder" role="Web Developer" />
      <ClientReview image="/images/c2.jpeg" name="Talukder" role="MERN Stack Developer" />
      <ClientReview image="/images/c3.jpeg" name="Anas" role="React Developer" />
      <ClientReview image="/images/c4.jpeg" name="Rakibul" role="Next Developer" />
    </Carousel>
  );
};

export default TestimonialSider;
