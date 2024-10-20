
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


import React, { useState, useEffect, useRef } from 'react';
import video1 from '../assets/video1.mp4'; // Import the video file

const slides = [
  { type: 'video', src: video1 }, // Video slide
  { type: 'image', src: '/images/map2.jpg' },
  { type: 'image', src: '/images/map3.jpg' },
  { type: 'image', src: '/images/map4.jpg' },
];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const containerRef = useRef(null);

  const handleScroll = (e) => {
    if (isScrolling) return;

    setIsScrolling(true);

    if (e.deltaY > 0) {
      if (currentIndex < slides.length - 1) {
        setCurrentIndex((prevIndex) => prevIndex + 1);
      } else {
        setCurrentIndex(0); // Loop back to the first slide
      }
    } else {
      if (currentIndex > 0) {
        setCurrentIndex((prevIndex) => prevIndex - 1);
      }
    }

    setTimeout(() => setIsScrolling(false), 800); // Debounce
  };

  useEffect(() => {
    const handleWindowScroll = (e) => {
      handleScroll(e);
    };

    window.addEventListener('wheel', handleWindowScroll);

    return () => {
      window.removeEventListener('wheel', handleWindowScroll);
    };
  }, [currentIndex, isScrolling]);

  return (
    <div ref={containerRef} className="relative w-full h-screen overflow-hidden">
      <div
        className="absolute inset-0 transition-transform duration-8500"
        style={{ transform: `translateY(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="h-screen w-full relative">
            {slide.type === 'video' ? (
              <video
                src={slide.src}
                autoPlay
                loop
                muted
                className="object-cover w-full h-full"
              />
            ) : (
              <img
                src={slide.src}
                alt={`Slide ${index + 1}`}
                className="object-cover w-full h-full"
              />
            )}

            {/* First slide with static centered words */}
            {index === 0 && (
             <div className="absolute inset-0 flex items-center justify-center" style={{ width: '100%', transform: 'translateY(-57%)' }}>
             <div className="text-purple font-bold flex" style={{ fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0' }}>
               <span className="transform -rotate-90" style={{ fontSize: '8.7em', width: '6.5em', marginLeft: '31%', marginRight: '-30.5%' }}>INSPIRE</span>
               <span className="transform -rotate-90" style={{ fontSize: '8.7em', width: '6.5em', marginRight: '-28%', marginTop: '0.5em' }}>INNOVATE</span> 
               <span className="transform -rotate-90" style={{ fontSize: '8.7em', width: '6.5em' }}>IMPACT</span>
             </div>
           </div>
           )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
