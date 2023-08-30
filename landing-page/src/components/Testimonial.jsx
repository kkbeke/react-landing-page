import React from "react";
import ProfilePic from "../assets/john-doe-image.png";
import { AiFillStar } from "react-icons/ai";

const Testimonial = () => {
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Testimonials</p>
        <h1 className="primary-heading">What They Are Saying</h1>
        <p className="primary-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
          eligendi culpa eaque autem exercitationem, ea perferendis quibusdam
          aliquam ipsa repellat.
        </p>
      </div>
      <div className="testimonial-section-bottom">
        <img src={ProfilePic} alt="" />
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis nostrum
          ea fuga, rem dignissimos dolore doloremque iure?
        </p>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>Kekebeke</h2>
      </div>
    </div>
  );
};

export default Testimonial;
