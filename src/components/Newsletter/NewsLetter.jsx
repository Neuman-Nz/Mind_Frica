import React from "react";
import "./NewsLetter.css";

function NewsLetter() {
  return (
    <div className="newsLetterContainer">
      <div className="newsLetterInner">
        <div className="newsLetterHeader">
          <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit!</h1>
        </div>
        <div className="newsLetterSubHeader">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio sed eum harum velit architecto
             dolor aut necessitatibus officia quasi quam.
          </p>
        </div>
        <div className="subscribeNewsLetter">
          <span className="subscribeNewsLetterArea">
            <input type="text" placeholder="Your email address" />
          </span>
          <span className="subscribeNewsLetterBtn">
            <button type="submit">Subscribe</button>
          </span>
        </div>
      </div>
      <div className="newsLetterDesign"></div>
    </div>
  );
}

export default NewsLetter;