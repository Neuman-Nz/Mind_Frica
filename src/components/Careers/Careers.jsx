import React from "react";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import { IoPricetagOutline, IoStarOutline } from "react-icons/io5";
import { VscArrowBoth } from "react-icons/vsc";
import "./Careers.css";
import Slider from "react-slick";

function Careers() {
  const data = [
    {
      id: 1,
      h1: "Steel dawn Work begins on new frigate",
      p: "HMS Prince of Wales will become the UK’s new flagship during a visit to Liverpool next week – taking over from her sister HMS Queen Elizabeth.",
      imgUrl:
        "https://images.pexels.com/photos/29291205/pexels-photo-29291205/free-photo-of-red-fire-hydrant-near-feuerwehr-station.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 2,
      h1: "Steel dawn Work begins on new frigate",
      p: "HMS Prince of Wales will become the UK’s new flagship during a visit to Liverpool next week – taking over from her sister HMS Queen Elizabeth.",
      imgUrl:
        "https://images.pexels.com/photos/17746619/pexels-photo-17746619/free-photo-of-a-firetruck-parked-in-the-garage.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 3,
      h1: "Steel dawn Work begins on new frigate",
      p: "HMS Prince of Wales will become the UK’s new flagship during a visit to Liverpool next week – taking over from her sister HMS Queen Elizabeth.",
      imgUrl:
        "https://images.pexels.com/photos/6015396/pexels-photo-6015396.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 4,
      h1: "Steel dawn Work begins on new frigate",
      p: "HMS Prince of Wales will become the UK’s new flagship during a visit to Liverpool next week – taking over from her sister HMS Queen Elizabeth.",
      imgUrl:
        "https://images.pexels.com/photos/29189044/pexels-photo-29189044/free-photo-of-viking-warrior-with-fire-shooting-weapon-in-forest.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 5,
      h1: "Steel dawn Work begins on new frigate",
      p: "HMS Prince of Wales will become the UK’s new flagship during a visit to Liverpool next week – taking over from her sister HMS Queen Elizabeth.",
      imgUrl:
        "https://images.pexels.com/photos/189474/pexels-photo-189474.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 6,
      h1: "Steel dawn Work begins on new frigate",
      p: "HMS Prince of Wales will become the UK’s new flagship during a visit to Liverpool next week – taking over from her sister HMS Queen Elizabeth.",
      imgUrl:
        "https://images.pexels.com/photos/18329661/pexels-photo-18329661/free-photo-of-fire-extinguishers-standing-on-the-grass.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 7,
      h1: "Steel dawn Work begins on new frigate",
      p: "HMS Prince of Wales will become the UK’s new flagship during a visit to Liverpool next week – taking over from her sister HMS Queen Elizabeth.",
      imgUrl:
        "https://images.pexels.com/photos/5965202/pexels-photo-5965202.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 8,
      h1: "Steel dawn Work begins on new frigate",
      p: "HMS Prince of Wales will become the UK’s new flagship during a visit to Liverpool next week – taking over from her sister HMS Queen Elizabeth.",
      imgUrl:
        "https://images.pexels.com/photos/6685930/pexels-photo-6685930.jpeg?auto=compress&cs=tinysrgb&w=600",
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
    infinite: false,
    speed: 500,
    slidesToShow: 4.5,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className="mainCareers">
      <div className="m-c-top">
        <div className="sideVerticleLeft"></div>
        <div className="sideVerticleRight"></div>
      </div>
      <div className="m-c-top-txt">
        <div className="horizontal-bottom-txt"></div>
        <div className="horizontal-top-txt"></div>
        <div className="sideVerticleLeft"></div>
        <div className="sideVerticleRight"></div>
        <div className="m-c-top-txt-inner">
          <p className="m-c-t-Ptag-small">Organisation</p>
          <h1>Surface Fleet</h1>
          <p className="m-c-t-Ptag-big">
            Resilient. Resourceful. Ready. Capable of taking on any maritime
            military operation at a moment’s notice.
          </p>

          {/* <div className="btnArrowCareerContainer">
            <BsArrowRight
              size={15}
              className="btnArrowGallery margin0 btnArrowCareer btnArrowCareer2 btnBothArrowCareer"
            />
          </div> */}
          <div className="bellowBtnArrowCareer"></div>
        </div>
      </div>

      <div className="m-c-bottom">
        <div className="bottomMiddleVerticle"></div>
        <h1 className="h1VerticleTop">Prepared</h1>
        <h1 className="h1VerticleBottom">Prepared</h1>
        {/* <h1>Prepared</h1> */}
        <div className="m-c-bottom-circle-top paddingLeft">
          <div className="m-c-b-c-top-text">
            <h1>World-class warships</h1>
            <p>
              Safeguarding territorial waters. Hunting pirates. Delivering
              humanitarian aid.
            </p>
            <p>
              Whatever the mission, our fleet of over 70 ships - from formidable
              aircraft carriers and destroyers, to minehunters and patrol
              vessels - gives us the capacity to respond rapidly to any
              eventuality by ocean, sea or river.
            </p>
            <div className="btnCase">
              <div className="btnCaseH1Cover">
                <h2 className="navUnderlineLeft">explore our ships</h2>
              </div>

              <BsArrowRight
                size={15}
                className="btnArrowGallery margin0"
                color="white"
              />
            </div>
          </div>
          <div className="m-c-b-c-top-circle-img"></div>
        </div>
        <div className="m-c-bottom-circle-bottom paddingLeft">
          <div className="m-c-b-c-top-circle-img"></div>
          <div className="m-c-b-c-top-text m-c-b-c-top-text2">
            <h1>World-class warships</h1>
            <p>
              Safeguarding territorial waters. Hunting pirates. Delivering
              humanitarian aid.
            </p>
            <p>
              Whatever the mission, our fleet of over 70 ships - from formidable
              aircraft carriers and destroyers, to minehunters and patrol
              vessels - gives us the capacity to respond rapidly to any
              eventuality by ocean, sea or river.
            </p>
            <div className="btnCase">
              <div className="btnCaseH1Cover">
                <h2 className="navUnderlineLeft">explore our ships</h2>
              </div>

              <BsArrowRight
                size={15}
                className="btnArrowGallery margin0"
                color="white"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="careerStories">
        <div className="carouselCareerverticleTop"></div>
        <div className="carouselCareerverticlebottom"></div>
        <div className="careerStoriesContent">
          <h1>Stories</h1>
          <ul class="nav nav-tabs nav-tabs-carrer" id="myTab" role="tablist">
            <li class="nav-item nav-item-career" role="presentation">
              <button
                class="nav-link active"
                id="home-tab"
                data-bs-toggle="tab"
                data-bs-target="#home"
                type="button"
                role="tab"
                aria-controls="home"
                aria-selected="true"
              >
                <span>
                  <IoStarOutline size={22} />
                </span>
                <span>Featured Stories</span>
              </button>
            </li>
            <li class="nav-item nav-item-career" role="presentation">
              <button
                class="nav-link"
                id="profile-tab"
                data-bs-toggle="tab"
                data-bs-target="#profile"
                type="button"
                role="tab"
                aria-controls="profile"
                aria-selected="false"
              >
                <span>
                  <IoPricetagOutline size={22} />
                </span>
                <span>What we do</span>
              </button>
            </li>
            <li class="nav-item nav-item-career" role="presentation">
              <button
                class="nav-link"
                id="contact-tab"
                data-bs-toggle="tab"
                data-bs-target="#contact"
                type="button"
                role="tab"
                aria-controls="contact"
                aria-selected="false"
              >
                <span>
                  <IoPricetagOutline size={22} />
                </span>
                <span>MIND explained</span>
              </button>
            </li>
          </ul>
          <div class="tab-content tab-content-career" id="myTabContent">
            <div
              class="tab-pane fade show active"
              id="home"
              role="tabpanel"
              aria-labelledby="home-tab"
            >
              <div className="careerCarouselContainer">
                <div className="">
                  <div className="slider-container slider-container-career">
                    <Slider {...settings}>
                      {data?.map((item, index) => {
                        return (
                          <div
                            key={index}
                            className="slickSlideItemContainer slickSlideItemContainerCareer"
                          >
                            <img
                              src={item.imgUrl}
                              alt="img"
                              className="careerImgCarousel"
                            />
                            <h1>{item?.h1}</h1>
                            <VscArrowBoth
                              size={15}
                              className="btnArrowGallery margin0 btnArrowCareer "
                            />
                          </div>
                        );
                      })}
                    </Slider>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="tab-pane fade"
              id="profile"
              role="tabpanel"
              aria-labelledby="profile-tab"
            >
              <div className="careerCarouselContainer">
                <div className="">
                  <div className="slider-container slider-container-career">
                    <Slider {...settings}>
                      {data?.map((item, index) => {
                        return (
                          <div
                            key={index}
                            className="slickSlideItemContainer slickSlideItemContainerCareer"
                          >
                            <img
                              src={item.imgUrl}
                              alt="img"
                              className="careerImgCarousel"
                            />
                            <h1>{item?.h1}</h1>
                            <VscArrowBoth
                              size={15}
                              className="btnArrowGallery margin0 btnArrowCareer "
                            />
                          </div>
                        );
                      })}
                    </Slider>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="tab-pane fade"
              id="contact"
              role="tabpanel"
              aria-labelledby="contact-tab"
            >
              <div className="careerCarouselContainer">
                <div className="">
                  <div className="slider-container slider-container-career">
                    <Slider {...settings}>
                      {data?.map((item, index) => {
                        return (
                          <div
                            key={index}
                            className="slickSlideItemContainer slickSlideItemContainerCareer"
                          >
                            <img
                              src={item.imgUrl}
                              alt="img"
                              className="careerImgCarousel"
                            />
                            <h1>{item?.h1}</h1>
                            <VscArrowBoth
                              size={15}
                              className="btnArrowGallery margin0 btnArrowCareer "
                            />
                          </div>
                        );
                      })}
                    </Slider>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="fleetCareer">
        <div class="carouselCareerverticleTop"></div>
        <div className="sideVerticleLeft backColorBlack"></div>
        <div className="sideVerticleRight backColorBlack"></div>
        <div className="horizontal-top-fleet backColorBlack"></div>
        <div className="horizontal-bottom-fleet backColorBlack"></div>
        <div className="fleetCareerInner">
          <div className="horizontal-top-txt backColorBlack"></div>
          <div>
            <h1>Meet the fleet</h1>
            <p>
              Over the next decade, £41 billion will be invested in world-class
              tech and support for the Mind Africa and Royal Fleet Auxiliary -
              including autonomous mine-hunters and ocean surveillance vessels -
              so that we remain an agile, unrivalled force ready to respond to
              advanced threats.
            </p>
          </div>
        </div>
      </div>

      <div className="mainCareerBottom">
      <div class="carouselCareerverticlebottom"></div>
        <div className="sideVerticleLeft backColorBlack"></div>
        <div className="sideVerticleRight backColorBlack"></div>
        <div className="mainCareerBottomInnerContainer">
          <div className="main-c-b-img"></div>

          <div className="m-c-b-container-txt">
            <p className="m-c-t-Ptag-small">future ships</p>
            <h1 className="m-c-b-container-txt-ptag">Inspiration Class</h1>
            <p className="mainBottomCareerPtag">
              Our five new Type 31 frigates will be at the heart of the Surface
              Fleet - intercepting threats, gathering intelligence and providing
              humanitarian support.
            </p>
          </div>

          <div className="btnCase">
            <div className="btnCaseH1Cover  backColorDark">
              <h2 className="navUnderlineLeft colorDark navUnderlineLeftCareer">
                explore our ships
              </h2>
            </div>

            <BsArrowRight
              size={15}
              className="btnArrowGallery margin0"
              color="white"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Careers;
