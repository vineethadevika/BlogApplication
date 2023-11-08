// BlogCarousel.js
import React, { useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const blogData = [
  {
    image: 'https://img.freepik.com/premium-photo/laptop-program-code-development-conception-beautiful-illustration-picture-generative-ai_146671-92244.jpg?w=826', // Replace with actual image URLs
  },
  {
    image: 'https://cdn.mos.cms.futurecdn.net/hK7x3XQN7DXF3sFHVnZUQM-1200-80.jpg.webp', // Replace with actual image URLs
  },
  // Add more blog data as needed
];

const BlogCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  useEffect(() => {
    // Disable body scrolling when the carousel is being interacted with
    document.body.style.overflow = 'hidden';

    // Re-enable body scrolling when the component is unmounted or carousel is inactive
    return () => {
      document.body.style.overflow = 'visible';
    };
  }, []);

  return (
    <Slider {...settings}>
      {blogData.map((blog, index) => (
        <div key={index}>
          <img
            src={blog.image}
            alt={`Image ${index + 1}`}
            style={{ width: '1600px', height: '600px' }} // Set your desired width and height here
          />
        </div>
      ))}
    </Slider>
  );
};

export default BlogCarousel;
