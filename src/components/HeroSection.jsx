
// import video1 from "../assets/video1.mp4";
// import video2 from "../assets/video2.mp4";

// const HeroSection = () => {
//   return (
//     <div className="flex flex-col items-center mt-6 lg:mt-20">
//       <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
//         WARM WELCOME TO
//         <span className="bg-gradient-to-r from-purple-500 to-red-800 text-transparent bg-clip-text">
//           {" "}
//           MIND AFRICA
//         </span>
//       </h1>
//       <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
//       Our Mission <br /> To empower the next generation of global <br /> leaders and professionals through mentorship and the provision of <br /> essential medical supplies.
//       </p>
//       <div className="flex justify-center my-10">
//         <a
//           href="#"
//           className="bg-gradient-to-r from-purple-500 to-purple-800 py-3 px-4 mx-3 rounded-md"
//         >
//           Register with Us
//         </a>
//         <a href="#" className="py-3 px-4 mx-3 rounded-md border">
//           Documentation
//         </a>
//       </div>
//       <div className="flex mt-10 justify-center">
//         <video
//           autoPlay
//           loop
//           muted
//           className="rounded-lg w-1/2 border border-purple-700 shadow-sm shadow-orange-400 mx-2 my-4"
//         >
//           <source src={video1} type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>
//         <video
//           autoPlay
//           loop
//           muted
//           className="rounded-lg w-1/2 border border-purple-700 shadow-sm shadow-orange-400 mx-2 my-4"
//         >
//           <source src={video2} type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;

import React, { useRef, useEffect, useState } from "react";
import div from "react-slick";
import "./hero.css";

const HeroSection = ({ unlockScroll, heroLockedOnReEntry }) => {
  const sliderRef = useRef(null); // To access the slider instance
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    afterChange: (current) => {
      setCurrentSlide(current); // Track current slide
      if (current === 3) {  // If last slide is reached (adjust number for more slides)
        unlockScroll();     // Unlock scroll after the last slide
      }
    },
  };

  // Handle scroll event to change slides
  const handleScroll = (event) => {
    // Prevent scrolling if locked or heroLockedOnReEntry is true
    if (heroLockedOnReEntry) {
      event.preventDefault(); // Prevent default scrolling behavior
      return; // Exit function
    }

    const scrollDirection = event.deltaY > 0 ? "down" : "up";

    if (scrollDirection === "down") {
      // Go to the next slide
      if (sliderRef.current && currentSlide < 3) {
        sliderRef.current.slickNext();
      }
    } else {
      // Go to the previous slide
      if (sliderRef.current && currentSlide > 0) {
        sliderRef.current.slickPrev();
      }
    }
  };

  useEffect(() => {
    window.addEventListener("wheel", handleScroll);
    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, [currentSlide]); // Track current slide for scroll behavior

  return (
    <div>
      <div className="slide">
        <div className="background background1"></div>
        <div className="caption">Caption 1</div>
      </div>
      <div className="slide">
        <div className="background background2"></div>
        <div className="caption">Caption 2</div>
      </div>
      <div className="slide">
        <div className="background background3"></div>
        <div className="caption">Caption 3</div>
      </div>
      <div className="slide">
        <div className="background background4"></div>
        <div className="caption">Caption 4</div>
      </div>
    </div>
  );
};

export default HeroSection;
