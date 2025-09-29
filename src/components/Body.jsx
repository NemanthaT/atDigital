import Background from "../assets/background.png";
import Computer from "../assets/computer.png";
import Magnify from "../assets/magnify.png";

import React, { useState } from "react";

const faqs = [
  {
    question: "Lorem ipsum dolor sit amet consectetur. Leo et sit eu libero?",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer.",
  },
  {
    question: "Lorem ipsum dolor sit amet consectetur. Tortor scelerisque integer?",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer.",
  },
  {
    question: "Lorem ipsum dolor sit amet consectetur. Faucibus scelerisque nunc?",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer.",
  },
];

function Body() {
  const [activeIndex, setActiveIndex] = useState(-1);

  return (
    <>
      <section className="hero">
        <div className="overlay">
          <img src={Background} alt="Background" />
        </div>

        <div className="hero-content">
          <div className="hero-card">
            <p>
              We Crush Your Competitors, Goals, And Sales Records - Without The B.S.
            </p>
            <button className="cta-btn">Get Free Consultation</button>
          </div>
        </div>
      </section>

      <section className="services" id="services">
        <div className="service-card">
          <div className="service-icon">
            <img src={Computer} alt="computer" />
          </div>
          <div className="service-content">
            <h2>Web & Mobile App Development</h2>
            <p>
              Your web and mobile Apps are pieces of the puzzle to grow your business. We use frameworks which tailor content and engagement methods to respond to different intents shown by your potential customers who interact with your business online.
            </p>
            <button className="learn-btn">Learn More</button>
          </div>
        </div>

        <div className="service-card">
          <div className="service-icon">
              <img src={Magnify} alt="magnifyGlass" />
          </div>
          <div className="service-content">
            <h2>Digital Strategy Consulting</h2>
            <p>
              Your digital strategy should complement the overall marketing strategy of the company. In online marketing, each component will never work in isolation and every business needs a different mix. We provide a clear concept and strategic overview to find the most efficient model for your business.
            </p>
            <button className="learn-btn">Learn More</button>
          </div>
        </div>
      </section>

      <section className="faq">
        <h2>Frequently asked questions</h2>
        {faqs.map((faq, idx) => (
          <div className={`faq-item${activeIndex === idx ? " active" : ""}`} key={idx}>
            <div className="faq-question" onClick={() => setActiveIndex(activeIndex === idx ? -1 : idx)}>
              <span>{faq.question}</span>
              <span className="faq-toggle">{activeIndex === idx ? "-" : "+"}</span>
            </div>
            {activeIndex === idx && (
              <div className="faq-answer">{faq.answer}</div>
            )}
          </div>
        ))}
      </section>
    </>
  );
}

export default Body;
