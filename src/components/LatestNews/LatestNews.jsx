import React from "react";
import Slider from "react-slick";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import "./latestNews.css";

function LatestNews() {
  const data = [
    {
      id: 1,
      h1: "Steel dawn: Work begins on new frigate, the fourth HMS Sheffield",
      p: "HMS Prince of Wales will become the UK’s new flagship during a visit to Liverpool next week – taking over from her sister HMS Queen Elizabeth.",
    },
    {
      id: 2,
      h1: "Steel dawn: Work begins on new frigate, the fourth HMS Sheffield",
      p: "HMS Prince of Wales will become the UK’s new flagship during a visit to Liverpool next week – taking over from her sister HMS Queen Elizabeth.",
    },
    {
      id: 3,
      h1: "Steel dawn: Work begins on new frigate, the fourth HMS Sheffield",
      p: "HMS Prince of Wales will become the UK’s new flagship during a visit to Liverpool next week – taking over from her sister HMS Queen Elizabeth.",
    },
    {
      id: 4,
      h1: "Steel dawn: Work begins on new frigate, the fourth HMS Sheffield",
      p: "HMS Prince of Wales will become the UK’s new flagship during a visit to Liverpool next week – taking over from her sister HMS Queen Elizabeth.",
    },
    {
      id: 5,
      h1: "Steel dawn: Work begins on new frigate, the fourth HMS Sheffield",
      p: "HMS Prince of Wales will become the UK’s new flagship during a visit to Liverpool next week – taking over from her sister HMS Queen Elizabeth.",
    },
    {
      id: 6,
      h1: "Steel dawn: Work begins on new frigate, the fourth HMS Sheffield",
      p: "HMS Prince of Wales will become the UK’s new flagship during a visit to Liverpool next week – taking over from her sister HMS Queen Elizabeth.",
    },
    {
      id: 7,
      h1: "Steel dawn: Work begins on new frigate, the fourth HMS Sheffield",
      p: "HMS Prince of Wales will become the UK’s new flagship during a visit to Liverpool next week – taking over from her sister HMS Queen Elizabeth.",
    },
    {
      id: 8,
      h1: "Steel dawn: Work begins on new frigate, the fourth HMS Sheffield",
      p: "HMS Prince of Wales will become the UK’s new flagship during a visit to Liverpool next week – taking over from her sister HMS Queen Elizabeth.",
    },
  ];

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div className="slickItem" onClick={onClick}>
        <BsArrowRight size={15} className="btnArrowInfoLatest" />
      </div>
    );
  }

  const styles = {
    display: "block",
    backgroundColor: "green",
    position: "absolute",
    top: "0",
    right: "-10%",
  };

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div className="slickItemNext" onClick={onClick}>
        <BsArrowLeft size={15} className="btnArrowInfoLatest" />
      </div>
    );
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="latestNewsContainer">

      <div className="latestNewsInner">
        <div className="latesNewsVerticle"></div>
        <h1 className="latestH1">Latest news</h1>
        <div className="slickInfoTop">
          <p>See All</p>
          <BsArrowRight size={15} className="btnArrowSlickInfoTop" />
        </div>

        <div className="slider-container">
          <Slider {...settings}>
            {data?.map((item, index) => {
              return (
                <div key={index} className="slickSlideItemContainer">
                  <h1>{item?.h1}</h1>
                  <p>{item?.p}</p>
                  <BsArrowRight size={15} className="btnArrowSlickInfoTop" />
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
      <div className="topLatestInfoHr"></div>
    </div>
  );
}

export default LatestNews;
