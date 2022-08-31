import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ReactToolTip from "react-tooltip";

import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

import "./testimonials.scss";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const query = '*[_type == "testimonials"]';

    client.fetch(query).then((data) => {
      setTestimonials(data);
    });
  }, []);

  const test = testimonials[currentIndex];

  const handleClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <>
      {testimonials.length && (
        <>
          <div className="app__testimonial-item app__flex">
            <img
              src={urlFor(testimonials[currentIndex].imgUrl)}
              alt="testimonial"
            />

            <div className="app__testimonial-content">
              <p className="p-text">{test.feedback}</p>
              <div>
                <h4 className="bold-text">{test.name}</h4>
                <h5 className="p-text">{test.company}</h5>
              </div>
            </div>
          </div>

          <div className="app__testimonial-btns app__flex">
            <div
              className="app__flex"
              onClick={() =>
                handleClick(
                  currentIndex === 0
                    ? testimonials.length - 1
                    : currentIndex - 1
                )
              }
            >
              <HiChevronLeft />
            </div>

            <div
              className="app__flex"
              onClick={() =>
                handleClick(
                  currentIndex === testimonials.length - 1
                    ? 0
                    : currentIndex + 1
                )
              }
            >
              <HiChevronRight />
            </div>
          </div>
        </>
      )}

      
    </>
  );
};

export default AppWrap(
  MotionWrap(Testimonials, "app__testimonial"),
  "testimonial",
  "app__primary_bg"
);
