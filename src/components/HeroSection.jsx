import React, { useState } from 'react';
import { BsArrowRightShort } from "react-icons/bs";
import { BsArrowDown } from "react-icons/bs";
import './hero.css';

function HeroSection() {
  const [animate, setAnimate] = useState(false);
  const [animate2, setAnimate2] = useState(false);
  const [animate3, setAnimate3] = useState(false);

  const triggerAnimation = () => {
    setAnimate(true);
    setAnimate2(false)
  };

  const triggerAnimation2 = () => {
    setAnimate(false);
    setAnimate2(true)
  };

  const triggerAnimation3 = () => {
    setAnimate2(false);
    // setAnimate(false);
    setAnimate3(true)
  };

  return (
    <div className='mainDiv'>
      <div className='rotateContainer'>
        <div className='rotateMain'>
          <p className={animate ? 'animate-global' : animate2 ? "undo-global": animate3 ? "undo-Modern-global"  : ""}>GLOBAL</p>
          <span className={`span1 ${animate ? 'span1Opacity' : animate2 ? 'span1playback' : ""}`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error minima aspernatur atque nostrum animi accusantium nesciunt numquam assumenda iste illo?</span>
          <p className={animate ? 'animate-modern' : animate2 ? "undo-modern" : animate3 ? "undo-Modern-global" : ""}>MODERN</p>
          <span className={`span2 ${animate2 ? "span2FadeIn" : animate3 ? "span2Exit" : ""}`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error minima aspernatur atque nostrum animi accusantium nesciunt numquam assumenda iste illo?</span>
          <p className={animate ? 'animate-ready' : animate2 ? "animate-ready" : animate3 ? "undo-ready" : ""}>READY</p>
          <span className={`span3 ${animate3 ? "span3FadeIn" : ""}`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error minima aspernatur atque nostrum animi accusantium nesciunt numquam assumenda iste illo?</span>
          <div className={`circleBG ${animate ? 'animate-circle' : animate2 ? 'animate-circle' : animate3 ? "animate-circle" : ""}`}></div>
        </div>
      </div>
      <div className='btnHeroAbsolute'>
      <button onClick={triggerAnimation}>Trigger Animation</button>
      
      <button onClick={triggerAnimation2}>Trigger Animation2</button>
      
      <button onClick={triggerAnimation3}>Trigger Animation3</button>
      </div>
       <BsArrowDown size={20} className="btnArrowHero"/>
    </div>
  );
}

export default HeroSection;
