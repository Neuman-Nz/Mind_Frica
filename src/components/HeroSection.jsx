import React, { useState } from "react";
import { BsArrowRightShort } from "react-icons/bs";
import { BsArrowDown } from "react-icons/bs";
import { IoIosCloseCircleOutline } from "react-icons/io";
import "./hero.css";
import video from "../assets/video1.mp4";

function HeroSection({sideMenuState, setSideMenuState}) {
  const [animate, setAnimate] = useState(false);
  const [animate2, setAnimate2] = useState(false);
  const [animate3, setAnimate3] = useState(false);

  const [playback, setPlayBack] = useState(0)
  const [impact, setImpact] = useState(false)

  const triggerAnimation = () => {
    setAnimate(true);
    setAnimate2(false);
  };

  const triggerAnimation2 = () => {
    setAnimate(false);
    setAnimate2(true);
    setImpact(playback === 2 && animate2)
  };

  const triggerAnimation3 = () => {
    setAnimate2(false);
    // setAnimate(false);
    setAnimate3(true);
    setPlayBack(2)
    

  };

  const hideSideMenu = () => {
    setSideMenuState(false)
  }

  console.log("stateHero", impact)

  return (
    <div className="mainDiv">
      <div className="rotateContainer">
        <div className="rotateMain">
          <p
            className={
              animate
                ? "animate-global"
                : animate2
                ? "undo-global"
                : animate3
                ? "undo-Modern-global"
                : ""
            }
          >
            INSPIRE
          </p>
          <span
            className={`span1 ${
              animate ? "span1Opacity" : animate2 ? "span1playback" : ""
            }`}
          >
            <b>Lorem ipsum dolor</b> consectetur adipisicing elit. Error minima
            aspernatur atque nostrum animi accusantium nesciunt numquam
            assumenda consectetur adipisicing elit. Error minima aspernatur
            atque nostrum animi accusantium nesciunt numquam assumenda iste
            illo?
          </span>
          <p
            className={
              animate
                ? "animate-modern"
                : animate2
                ? "undo-modern"
                : animate3
                ? "undo-Modern-global"
                : ""
            }
          >
            INNOVATE
          </p>
          <span
            className={`span2 ${
              animate2 ? "span2FadeIn" : animate3 ? "span2Exit" : ""
            }`}
          >
            <b>Lorem ipsum dolor</b> consectetur adipisicing elit. Error minima
            aspernatur atque nostrum animi accusantium nesciunt numquam
            assumenda consectetur adipisicing elit. Error minima aspernatur
            atque nostrum animi accusantium nesciunt numquam assumenda iste
            illo?
          </span>
          <p
            className={
              animate
                ? "animate-ready"
                : animate2
                ? "animate-ready"
                : animate3
                ? "undo-ready"
                : ""
            }
          >
            IMPACT
          </p>
          <span className={`span3 ${animate3 ? "span3FadeIn" : impact ? "impactPlayback" : "" }`}>
            <b>Lorem ipsum dolor</b> consectetur adipisicing elit. Error minima
            aspernatur atque nostrum animi accusantium nesciunt numquam
            assumenda consectetur adipisicing elit. Error minima aspernatur
            atque nostrum animi accusantium nesciunt numquam assumenda iste
            illo?
          </span>
          <div
            className={`circleBG ${
              animate
                ? "animate-circle"
                : animate2
                ? "animate-circle"
                : animate3
                ? "animate-circle"
                : ""
            }`}
          ></div>
        </div>
      </div>
      <div className="btnHeroAbsolute">
        <button onClick={triggerAnimation}>1</button>

        <button onClick={triggerAnimation2}>2</button>

        <button onClick={triggerAnimation3}>3</button>
      </div>
      <div className={`sideMenu ${sideMenuState ? "open" : "close"}`}>
        <div className="sideMenuFixed">
          <div className={`sideMenuLeft ${
              sideMenuState ? "visible" : "hidden"
            }`} ></div>
          <div className={`sideMenuRight ${
          sideMenuState ? "show" : "hide"
        }`}>
            <div className="closeIcons">
            <IoIosCloseCircleOutline size={35} className="icon" onClick={hideSideMenu}/>
            </div>
            <ul>
              <li>list one</li>
              <li>list two</li>
              <li>list three</li>
              <li>list four</li>
              <li>list five</li>
              <li>list six</li>
              <li>list seven</li>
            </ul>
          </div>
        </div>
      </div>
      <BsArrowDown size={20} className="btnArrowHero" />
    </div>
  );
}

export default HeroSection;


