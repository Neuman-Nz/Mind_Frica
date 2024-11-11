import React, { useState } from "react";
import "./gallery.css";

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

  return (
    <div>
      {/* <div class="GAL-h1">
      <h1>EXPLORE WHAT WE'VE DONE BEFORE</h1>
      </div> */}
       
       <div class="container">
      <div class="slide">
        <div
          class="item"
          style={{ backgroundImage: "url(https://i.ibb.co/qCkd9jS/img1.jpg)" }}
        >
          <div class="content">
            <div class="name">Lorem, ipsum.</div>
            <div class="des">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis, repudiandae explicabo. Unde laudantium corporis in
              beatae incidunt excepturi iusto eveniet reiciendis similique,
              veniam vero qui dicta praesentium officiis accusamus corrupti?
            </div>
            <button>View</button>
          </div>
          <div className="imgGalleryContainer">
          {items.map((item, index) => {
            return (
              <div key={index} className="imgGallery" style={{backgroundImage: `url(${item.image})`}}>
              </div>
            );
          })}
          </div>
          
        </div>

        {/* <div class="item"
              style={{backgroundImage: "url(https://i.ibb.co/jrRb11q/img2.jpg)"}}>
              <div class="content">
                  <div class="name">Finland</div>
                  <div class="des">X-Dev, Transforming code into visual poetry..!</div>
                  <button>See More</button>
              </div>
          </div>
          <div class="item"
              style={{backgroundImage: "url(https://i.ibb.co/NSwVv8D/img3.jpg)"}}>
              <div class="content">
                  <div class="name">Iceland</div>
                  <div class="des">X-Dev, Transforming code into visual poetry..!</div>
                  <button>See More</button>
              </div>
          </div>
          <div class="item"
              style={{backgroundImage: "url(https://i.ibb.co/Bq4Q0M8/img4.jpg)"}}>
              <div class="content">
                  <div class="name">Australia</div>
                  <div class="des">X-Dev, Transforming code into visual poetry..!</div>
                  <button>See More</button>
              </div>
          </div>
          <div class="item"
              style={{backgroundImage: "url(https://i.ibb.co/jTQfmTq/img5.jpg)"}}>
              <div class="content">
                  <div class="name">Netherland</div>
                  <div class="des">X-Dev, Transforming code into visual poetry..!</div>
                  <button>See More</button>
              </div>
          </div>
          <div class="item"
              style={{backgroundImage: "url(https://i.ibb.co/RNkk6L0/img6.jpg)"}}>
              <div class="content">
                  <div class="name">Ireland</div>
                  <div class="des">X-Dev, Transforming code into visual poetry..! </div>
                  <button>See More</button>
              </div>
          </div> */}
      </div>

      <div class="button">
        <button class="prev">
          <i class="fa-solid fa-arrow-left"></i>
        </button>
        <button class="next">
          <i class="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>
    </div>
  );
};

export default Gallery;
