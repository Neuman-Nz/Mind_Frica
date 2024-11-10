import { features } from "../../constants";
import { BsArrowRightShort } from "react-icons/bs";
import { IoLogoAndroid } from "react-icons/io";
import { IoLogoAngular } from "react-icons/io";
import { IoLogoApple } from "react-icons/io";
import { IoLogoBitbucket } from "react-icons/io";
import { IoLogoBuffer } from "react-icons/io";
import "./features.css";
import { useState } from "react";

const FeatureSection = () => {

  const [indicator1, setIndicator1] = useState(true)
  const [indicator2, setIndicator2] = useState(false)
  const [indicator3, setIndicator3] = useState(false)
  const [indicator4, setIndicator4] = useState(false)
  const [indicator5, setIndicator5] = useState(false)

  const handleInd1 = () => {
    setIndicator1(true)
    setIndicator2(false)
    setIndicator3(false)
    setIndicator4(false)
    setIndicator5(false)
  }
  const handleInd2 = () => {
    setIndicator1(false)
    setIndicator2(true)
    setIndicator3(false)
    setIndicator4(false)
    setIndicator5(false)
  }
  const handleInd3 = () => {
    setIndicator1(false)
    setIndicator2(false)
    setIndicator3(true)
    setIndicator4(false)
    setIndicator5(false)
  }
  const handleInd4 = () => {
    setIndicator1(false)
    setIndicator2(false)
    setIndicator3(false)
    setIndicator4(true)
    setIndicator5(false)
  }
  const handleInd5 = () => {
    setIndicator1(false)
    setIndicator2(false)
    setIndicator3(false)
    setIndicator4(false)
    setIndicator5(true)
  }

  return (
    <div id="carouselExampleIndicators" class="carousel slide slideContainer">
      <div className="cirleBlock"></div>
      <div className="firstLineMap">
        <div className="flmVerticle"></div>
        <div className={`${indicator1 ? "flmHorizontalV1" : "displayNone"}`}></div> 
        <div className={`${indicator2 ? "flmHorizontal2" : "displayNone"}`}></div>
        <div className={`${indicator4 ? "flmHorizontal1Right" : "displayNone"}`}></div>
        <div className={`${indicator5 ? "flmHorizontal2Right" : "displayNone"}`}></div>
        <div className={`${indicator1 ? "flmHorizontal1" : "displayNone"}`}></div>
        <div className={`${indicator2 ? "flmHorizontalV2" : "displayNone"}`}></div>
        <div className={`${indicator4 ? "flmHorizontalV1Right" : "displayNone"}`}></div>
        <div className={`${indicator5 ? "flmHorizontalV2Right" : "displayNone"}`}></div>
        <div className={`${indicator3 ? "flmHorizontalV3Right" : "displayNone"}`}></div>
        <div className={`${indicator3 ? "flmHorizontal3" : "displayNone"}`}></div>
      </div>
      <div class="carousel-indicators slideIndicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          aria-current="true"
          aria-label="Slide 1"
          className="active btnCarousel"
          onClick={handleInd1}
        >
          <IoLogoAndroid size={40} className="iconFeatures"/>
          <span style={{width: "fit-content"}}>Logo Name</span>
        </button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
          className="btnCarousel"
          onClick={handleInd2}
        >
          <IoLogoAngular size={40} className="iconFeatures" />
          <span style={{width: "fit-content"}}>Logo Name</span>
        </button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
          className="btnCarousel"
          onClick={handleInd3}
        >
          <IoLogoApple size={40} className="iconFeatures" />
          <span style={{width: "fit-content"}}>Logo Name</span>
        </button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="3"
          aria-label="Slide 4"
          className="btnCarousel"
          onClick={handleInd5}
        >
          <IoLogoBitbucket size={40} className="iconFeatures" />
          <span style={{width: "fit-content"}}>Logo Name</span>
        </button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="4"
          aria-label="Slide 5"
          className="btnCarousel"
          onClick={handleInd4}
        >
          <IoLogoBuffer size={40} className="iconFeatures" />
          <span style={{width: "fit-content"}}>Logo Name</span>
        </button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active featuresContainer">
          <div className="fcImageTxt">
            <p className="headerLeft">Lorem ips dolor</p>
            <img
              src="https://images.pexels.com/photos/458983/pexels-photo-458983.jpeg?auto=compress&cs=tinysrgb&w=600"
              class="d-block w-100 feartursImg"
              alt="..."
            />
            <div className="rightContainerFt">
              <h2 className="rightHeader">Lorem ips dolor sit.</h2>
              <p className="txt">
                Lorem ips dolor sit amet, consectetur adipisicing elit.
                Dignissimos ipsam eaque sit. Minus, ducimus perferendis Lorem
                ipsum dolor sit amet, consectetur adipisicing elit. Soluta,
                maxime?!
              </p>
              <div className="btnFeatures">
                <p className="btnFeaturesTxt">Lorem ips dolor sit</p>
                <BsArrowRightShort size={20} className="btnArrow" color="white"/>
              </div>
            </div>
          </div>
        </div>
        <div class="carousel-item featuresContainer">
          <div className="fcImageTxt">
            <p className="headerLeft">Lorem ips dolor</p>
            <img
              src="https://images.pexels.com/photos/5288094/pexels-photo-5288094.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              class="d-block w-100 feartursImg"
              alt="..."
            />
            <div className="rightContainerFt">
              <h2 className="rightHeader">Lorem ips dolor sit.</h2>
              <p className="txt">
                Lorem ips dolor sit amet, consectetur adipisicing elit.
                Dignissimos ipsam eaque sit. Minus, ducimus perferendis Lorem
                ipsum dolor sit amet, consectetur adipisicing elit. Soluta,
                maxime?!
              </p>
              <div className="btnFeatures">
                <p className="btnFeaturesTxt">Lorem ips dolor sit</p>
                <BsArrowRightShort size={20} className="btnArrow" color="white"/>
              </div>
            </div>
          </div>
        </div>
        <div class="carousel-item featuresContainer">
          <div className="fcImageTxt">
            <p className="headerLeft">Lorem ips dolor</p>
            <img
              src="https://images.pexels.com/photos/6495709/pexels-photo-6495709.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              class="d-block w-100 feartursImg"
              alt="..."
            />
            <div className="rightContainerFt">
              <h2 className="rightHeader">Lorem ips dolor sit.</h2>
              <p className="txt">
                Lorem ips dolor sit amet, consectetur adipisicing elit.
                Dignissimos ipsam eaque sit. Minus, ducimus perferendis Lorem
                ipsum dolor sit amet, consectetur adipisicing elit. Soluta,
                maxime?!
              </p>
              <div className="btnFeatures">
                <p className="btnFeaturesTxt">Lorem ips dolor sit</p>
                <BsArrowRightShort size={20} className="btnArrow" color="white"/>
              </div>
            </div>
          </div>
        </div>
        <div class="carousel-item featuresContainer">
          <div className="fcImageTxt">
            <p className="headerLeft">Lorem ips dolor</p>
            <img
              src="https://images.pexels.com/photos/6495709/pexels-photo-6495709.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              class="d-block w-100 feartursImg"
              alt="..."
            />
            <div className="rightContainerFt">
              <h2 className="rightHeader">Lorem ips dolor sit.</h2>
              <p className="txt">
                Lorem ips dolor sit amet, consectetur adipisicing elit.
                Dignissimos ipsam eaque sit. Minus, ducimus perferendis Lorem
                ipsum dolor sit amet, consectetur adipisicing elit. Soluta,
                maxime?!
              </p>
              <div className="btnFeatures">
                <p className="btnFeaturesTxt">Lorem ips dolor sit</p>
                <BsArrowRightShort size={20} className="btnArrow" color="white"/>
              </div>
            </div>
          </div>
        </div>
        <div class="carousel-item featuresContainer">
          <div className="fcImageTxt">
            <p className="headerLeft">Lorem ips dolor</p>
            <img
              src="https://images.pexels.com/photos/6495709/pexels-photo-6495709.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              class="d-block w-100 feartursImg"
              alt="..."
            />
            <div className="rightContainerFt">
              <h2 className="rightHeader">Lorem ips dolor sit.</h2>
              <p className="txt">
                Lorem ips dolor sit amet, consectetur adipisicing elit.
                Dignissimos ipsam eaque sit. Minus, ducimus perferendis Lorem
                ipsum dolor sit amet, consectetur adipisicing elit. Soluta,
                maxime?!
              </p>
              <div className="btnFeatures">
                <p className="btnFeaturesTxt">Lorem ips dolor sit</p>
                <BsArrowRightShort size={20} className="btnArrow" color="white"/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
      
    </div>
  );
};

export default FeatureSection;
