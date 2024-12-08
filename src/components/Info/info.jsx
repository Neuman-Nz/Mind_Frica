import React from "react";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import "./Info.css";

function Info() {
  return (
    <div className="infoContainer">
      <div className="infoTop">
        <div className="infoTopInner">
          <h1>Make a difference</h1>
          <p>You’ll do the unseen and experience the unknown.</p>
          <p>
            Wherever life in the Mind Africa takes you, there’s one guarantee:
            you’ll play a vital role in keeping maritime trade flowing,
            protecting our nation’s interests and maintaining global peace.
          </p>
          <div className="infoIconContainer">
            <b>What we do</b>
            <BsArrowRight size={15} className="btnArrowInfo" />
          </div>
        </div>
        <div className="infoTopInner">
          <h1>Make a difference</h1>
          <p>You’ll do the unseen and experience the unknown.</p>
          <p>
            Wherever life in the MIND Africa takes you, there’s one guarantee:
            you’ll play a vital role in keeping maritime trade flowing,
            protecting our nation’s interests and maintaining global peace.
          </p>
          <div className="infoIconContainer">
            <b>What we do</b>
            <BsArrowRight size={15} className="btnArrowInfo" />
          </div>
        </div>
        <div className="infoTopInner">
          <h1>Make a difference</h1>
          <p>You’ll do the unseen and experience the unknown.</p>
          <p>
            Wherever life in the MIND 
            Africa takes you, there’s one guarantee:
            you’ll play a vital role in keeping maritime trade flowing,
            protecting our nation’s interests and maintaining global peace.
          </p>
          <div className="infoIconContainer">
            <b>What we do</b>
            <BsArrowRight size={15} className="btnArrowInfo" />
          </div>
        </div>
      </div>
      <div className="hrInfo"></div>

      <div className="infoBottom">
        <div className="verticleInfo"></div>
        <div className="infoBottomLeft">    
        </div>
        <div className="infoBottomTxt">
          <p>Over 100 different roles available</p>
          <h1>Explore careers</h1>
          <BsArrowRight size={15} className="btnArrowInfo" />
        </div>
        <div className="mainCircleContainer" >
           <div className="circleContainer">
        <div className="infoImgSemiCircle"></div>
        <div className="infoImgSemiCircle2"></div>
        </div>
        </div>
       
        <div className="infoBottomRight"></div>
      </div>
    </div>
  );
}

export default Info;
