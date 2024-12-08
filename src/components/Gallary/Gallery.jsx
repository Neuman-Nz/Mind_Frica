import React, { useState } from "react";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";

import "./gallery.css";
import { useNavigate } from "react-router-dom";

const Gallery = () => {
  const [items, setItems] = useState([
    {
      image: "https://i.ibb.co/qCkd9jS/img1.jpg",
      name: "Switzerland",
      description: "X-Dev, Transforming code into visual poetry..!",
    },
    {
      image: "https://i.ibb.co/jrRb11q/img2.jpg",
      name: "Finland",
      description: "X-Dev, Transforming code into visual poetry..!",
    },
    {
      image: "https://i.ibb.co/NSwVv8D/img3.jpg",
      name: "Iceland",
      description: "X-Dev, Transforming code into visual poetry..!",
    },
    {
      image: "https://i.ibb.co/Bq4Q0M8/img4.jpg",
      name: "Australia",
      description: "X-Dev, Transforming code into visual poetry..!",
    },
    {
      image: "https://i.ibb.co/jTQfmTq/img5.jpg",
      name: "Netherland",
      description: "X-Dev, Transforming code into visual poetry..!",
    },
    {
      image: "https://i.ibb.co/RNkk6L0/img6.jpg",
      name: "Ireland",
      description: "X-Dev, Transforming code into visual poetry..!",
    },
  ]);

  const navigate = useNavigate()

  const nextSlide = () => {
    setItems((prevItems) => {
      const newItems = [...prevItems];
      newItems.push(newItems.shift()); // Move first item to the end
      return newItems;
    });
  };

  const prevSlide = () => {
    setItems((prevItems) => {
      const newItems = [...prevItems];
      newItems.unshift(newItems.pop()); // Move last item to the start
      return newItems;
    });
  };

  const handleClick = () => {
    alert("hello")
    navigate("/careers")
  }

  return (
    <div className="mainContainerGallery">
      <div className="galleryTop">
        <p>Lorem, ipsum dolor.</p>
        <h2>Lorem ipsum dolor sit amet.</h2>
      </div>
      <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active carousel-item-gallery">
            <img
              src="https://i.postimg.cc/vTLbM9NR/pexels-suraphat-933624-1.jpg"
              className="d-block w-100 slideImg"
              alt="..."
            />
            <div className="circleBGGallery">
              <div className="circleBGGalleryH1">
                <h1>Reward</h1>
              </div>

              <div className="circleBGGalleryInner">
                <h2>The world is your</h2>
                <p>
                  Exciting career opportunities. Support for your whole family.
                  Unrivalled sense of community. Your commitment to our cause
                  deserves rewards like no other.
                </p>
                <BsArrowRight
                  size={15}
                  className="btnArrowGallery"
                  color="white"
                  onClick={handleClick}
                />
              </div>
            </div>
          </div>
          <div className="carousel-item carousel-item-gallery">
            <img
              src="https://i.postimg.cc/gjTJ13XY/pexels-newmanphotographs-14831726.jpg"
              className="d-block w-100 slideImg"
              alt="..."
            />
            <div className="circleBGGallery">
              <div className="circleBGGalleryH1">
                <h1>Reward</h1>
              </div>

              <div className="circleBGGalleryInner">
                <h2>The world is your</h2>
                <p>
                  Exciting career opportunities. Support for your whole family.
                  Unrivalled sense of community. Your commitment to our cause
                  deserves rewards like no other.
                </p>
                <BsArrowRight
                  size={15}
                  className="btnArrowGallery"
                  color="white"
                  onClick={handleClick}
                />
              </div>
            </div>
          </div>
          <div className="carousel-item carousel-item-gallery">
            <img
              src="https://i.postimg.cc/bNnpq740/pexels-lagosfoodbank-6472410.jpg"
              className="d-block w-100 slideImg"
              alt="..."
            />
            <div className="circleBGGallery">
              <div className="circleBGGalleryH1">
                <h1>Reward</h1>
              </div>

              <div className="circleBGGalleryInner">
                <h2>The world is your</h2>
                <p>
                  Exciting career opportunities. Support for your whole family.
                  Unrivalled sense of community. Your commitment to our cause
                  deserves rewards like no other.
                </p>
                <BsArrowRight
                  size={15}
                  className="btnArrowGallery"
                  color="white"
                  onClick={handleClick}
                />
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <BsArrowLeft size={15} className="btnArrowGallerySlide" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <BsArrowRight size={15} className="btnArrowGallerySlide" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Gallery;
