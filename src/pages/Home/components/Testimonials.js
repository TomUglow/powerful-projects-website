import React, { useState, useEffect, useRef, useCallback } from 'react';
import './Testimonials.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faStar } from '@fortawesome/free-solid-svg-icons';

const testimonials = [
  {
    id: 1,
    message:
      "I was so impressed with the quality of work and the professionalism of the team. They exceeded my expectations and delivered a project that was on time and on budget.",
    customer: "Jacob W. - South Yarra",
  },
  {
    id: 2,
    message:
      "They were a pleasure to work with and I would highly recommend them to anyone looking for a reliable and trustworthy contractor.",
    customer: "Christopher H. - Ashburton",
  },
  {
    id: 3,
    message:
      "The project was completed to a high standard and they were always available to answer any questions I had. I will definitely be using them again in the future.",
    customer: "Andrew P. - Geelong",
  },
  {
    id: 4,
    message:
      "They are a great company to work with and I am very happy with the results. I would not hesitate to recommend them to others.",
    customer: "Matthew H. - Carnegie",
  },
];

const Testimonials = () => {
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const intervalRef = useRef(null);

  const nextTestimonial = useCallback(() => {
    setCurrentTestimonialIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  }, []);

  const startAutoPlay = useCallback(() => {
    intervalRef.current = setInterval(nextTestimonial, 5000); // Change testimonial every 5 seconds
  }, [nextTestimonial]);

  const stopAutoPlay = () => {
    clearInterval(intervalRef.current);
  };

  const handleNext = () => {
    stopAutoPlay();
    nextTestimonial();
    startAutoPlay();
  };

  const handlePrev = () => {
    stopAutoPlay();
    setCurrentTestimonialIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
    startAutoPlay();
  };

  useEffect(() => {
    startAutoPlay();
    return () => stopAutoPlay(); // Cleanup interval on component unmount
  }, [startAutoPlay]);

  return (
    <section className="testimonials">
      <h2>TESTIMONIALS</h2>
      <h1>What our customers have to say...</h1>
      <FontAwesomeIcon icon={faStar} className='five-star' />
      <FontAwesomeIcon icon={faStar} className='five-star' />
      <FontAwesomeIcon icon={faStar} className='five-star' />
      <FontAwesomeIcon icon={faStar} className='five-star' />
      <FontAwesomeIcon icon={faStar} className='five-star' />
      <h2>REVIEWS</h2>
      <div className="testimonial-slider">
        <button className="slider-btn prev" onClick={handlePrev}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <div className="testimonial-content">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`testimonial-message ${
                index === currentTestimonialIndex
                  ? 'show'
                  : index === (currentTestimonialIndex - 1 + testimonials.length) % testimonials.length
                  ? 'hide'
                  : ''
              }`}
            >
              <p>{testimonial.message}</p>
              <h2 className="testimonial-customer">{testimonial.customer}</h2>
            </div>
          ))}
        </div>
        <button className="slider-btn next" onClick={handleNext}>
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </section>
  );
};

export default Testimonials;
