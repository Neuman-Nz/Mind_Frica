// import React from "react";
// import "./gallery.css"
// export function Gallery() {
//   const data = [
//     {
//       imgelink:
//         "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
//     },
//     {
//       imgelink:
//         "https://images.unsplash.com/photo-1432462770865-65b70566d673?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
//     },
//     {
//       imgelink:
//         "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
//     },
//     {
//       imgelink:
//         "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80",
//     },
//     {
//       imgelink:
//         "https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80",
//     },
//   ];
 
//   const [active, setActive] = React.useState(
//     "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
//   );
 
//   return (
//     <div className="grid gap-4 galleryMain" style={{marginTop: "30px",}}>
//         <div className="example conic">
//     Conic Gradient
//   </div>
//     </div>
//   );
// }

// export default Gallery;

import { features } from "../../constants";
import { BsArrowRightShort } from "react-icons/bs";
import { IoLogoAndroid } from "react-icons/io";
import { IoLogoAngular } from "react-icons/io";
import { IoLogoApple } from "react-icons/io";
import { IoLogoBitbucket } from "react-icons/io";
import { IoLogoBuffer } from "react-icons/io";
import "./gallery.css";
import { useState } from "react";

const Gallery = () => {

  const [indicator1Gallery, setIndicator1Gallery] = useState(true)
  const [indicator2Gallery, setIndicator2Gallery] = useState(false)
  const [indicator3Gallery, setIndicator3Gallery] = useState(false)
  const [indicator4Gallery, setIndicator4Gallery] = useState(false)
  const [indicator5Gallery, setIndicator5Gallery] = useState(false)

  const handleInd1Gallery = () => {
    setIndicator1Gallery(true)
    setIndicator2Gallery(false)
    setIndicator3Gallery(false)
    setIndicator4Gallery(false)
    setIndicator5Gallery(false)
  }
  const handleInd2Gallery = () => {
    setIndicator1Gallery(false)
    setIndicator2Gallery(true)
    setIndicator3Gallery(false)
    setIndicator4Gallery(false)
    setIndicator5Gallery(false)
  }
  const handleInd3Gallery = () => {
    setIndicator1Gallery(false)
    setIndicator2Gallery(false)
    setIndicator3Gallery(true)
    setIndicator4Gallery(false)
    setIndicator5Gallery(false)
  }
  const handleInd4Gallery = () => {
    setIndicator1Gallery(false)
    setIndicator2Gallery(false)
    setIndicator3Gallery(false)
    setIndicator4Gallery(true)
    setIndicator5Gallery(false)
  }
  const handleInd5Gallery = () => {
    setIndicator1Gallery(false)
    setIndicator2Gallery(false)
    setIndicator3Gallery(false)
    setIndicator4Gallery(false)
    setIndicator5Gallery(true)
  }

  return (
    <div id="carouselExampleCaptions" class="carousel slide slideContainer" data-bs-ride="carousel">
      {/* <div className="cirleBlock"></div>
      <div className="firstLineMap">
        <div className="flmVerticle"></div>
        <div className={`${indicator1Gallery ? "flmHorizontalV1" : "displayNone"}`}></div> 
        <div className={`${indicator2Gallery ? "flmHorizontal2" : "displayNone"}`}></div>
        <div className={`${indicator4Gallery ? "flmHorizontal1Right" : "displayNone"}`}></div>
        <div className={`${indicator5Gallery ? "flmHorizontal2Right" : "displayNone"}`}></div>
        <div className={`${indicator1Gallery ? "flmHorizontal1" : "displayNone"}`}></div>
        <div className={`${indicator2Gallery ? "flmHorizontalV2" : "displayNone"}`}></div>
        <div className={`${indicator4Gallery ? "flmHorizontalV1Right" : "displayNone"}`}></div>
        <div className={`${indicator5Gallery ? "flmHorizontalV2Right" : "displayNone"}`}></div>
        <div className={`${indicator3Gallery ? "flmHorizontalV3Right" : "displayNone"}`}></div>
        <div className={`${indicator3Gallery ? "flmHorizontal3" : "displayNone"}`}></div>
      </div>
      <div class="carousel-indicators slideIndicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          aria-current="true"
          aria-label="Slide 1"
          className="active btnCarousel"
          onClick={handleInd1Gallery}
        >
          <IoLogoAndroid size={40} className="iconFeatures"/>
          <span style={{width: "fit-content"}}>Logo Name</span>
        </button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
          className="btnCarousel"
          onClick={handleInd2Gallery}
        >
          <IoLogoAngular size={40} className="iconFeatures" />
          <span style={{width: "fit-content"}}>Logo Name</span>
        </button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
          className="btnCarousel"
          onClick={handleInd3Gallery}
        >
          <IoLogoApple size={40} className="iconFeatures" />
          <span style={{width: "fit-content"}}>Logo Name</span>
        </button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="3"
          aria-label="Slide 4"
          className="btnCarousel"
          onClick={handleInd5Gallery}
        >
          <IoLogoBitbucket size={40} className="iconFeatures" />
          <span style={{width: "fit-content"}}>Logo Name</span>
        </button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="4"
          aria-label="Slide 5"
          className="btnCarousel"
          onClick={handleInd4Gallery}
        >
          <IoLogoBuffer size={40} className="iconFeatures" />
          <span style={{width: "fit-content"}}>Logo Name</span>
        </button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active featuresContainer">
          <div className="fcImageTxt">
            <p className="headerLeft">Lorem ips dolor</p>
            <img src="" class="d-block w-100 feartursImg"/>
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
            <img src="" class="d-block w-100 feartursImg"/>
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
            <img src="" class="d-block w-100 feartursImg"/>
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
            <img src="" class="d-block w-100 feartursImg"/>
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
            <img src="" class="d-block w-100 feartursImg"/>
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
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
       */}
    </div>
//     <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
//   <div class="carousel-indicators">
//     <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
//     <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
//     <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
//   </div>
//   <div class="carousel-inner">
//     <div class="carousel-item active">
//       <img src="..." class="d-block w-100" alt="..."/>
//       <div class="carousel-caption d-none d-md-block">
//         <h5>First slide label</h5>
//         <p>Some representative placeholder content for the first slide.</p>
//       </div>
//     </div>
//     <div class="carousel-item">
//       <img src="..." class="d-block w-100" alt="..."/>
//       <div class="carousel-caption d-none d-md-block">
//         <h5>Second slide label</h5>
//         <p>Some representative placeholder content for the second slide.</p>
//       </div>
//     </div>
//     <div class="carousel-item">
//       <img src="..." class="d-block w-100" alt="..."/>
//       <div class="carousel-caption d-none d-md-block">
//         <h5>Third slide label</h5>
//         <p>Some representative placeholder content for the third slide.</p>
//       </div>
//     </div>
//   </div>
//   <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
//     <span class="carousel-control-prev-icon" aria-hidden="true"></span>
//     <span class="visually-hidden">Previous</span>
//   </button>
//   <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
//     <span class="carousel-control-next-icon" aria-hidden="true"></span>
//     <span class="visually-hidden">Next</span>
//   </button>
// </div>
  );
};

export default Gallery;
