import React, { useState } from "react";
import quest from "./quest";

const Questions = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const openUp = (index) => {
    setOpenIndex(index);
  };

  const closeUp = () => {
    setOpenIndex(-1); // Set to -1 to close all answers
  };

  return (
    <section className="questions">
      <h2>Frequently asked questions</h2>
      <div className="faq-container">
        {quest.map((quests, index) => (
          <div
            key={quests.id}
            className={`faq ${openIndex === index ? "active" : ""}`}
          >
            <h3 className="faq-title">{quests.title}</h3>
            <p className="faq-text">{quests.text}</p>
            <button className="faq-toggle">
              <i
                onClick={() => openUp(index)}
                className={`fas fa-chevron-down ${
                  openIndex === index ? "active" : ""
                }`}
              ></i>
              <i
                onClick={closeUp}
                className={`fas fa-chevron-up ${
                  openIndex === index ? "active" : ""
                }`}
              ></i>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Questions;
