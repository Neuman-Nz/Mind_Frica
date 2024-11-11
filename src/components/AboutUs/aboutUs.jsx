import React from 'react';
import video3 from '../../assets/video3.mp4'; 
import "./AboutUS.css"

const AboutUs = () => {
  return (
    <div className="max-w-5xl mx-auto pt-20 px-6">
 <section className="about-us">
      <div className="main-video">
        <video src={video3} controls autoPlay loop muted className="video-content"></video>
      </div>
      <div class="text">
        <h4>Who We Are</h4>
        <h1>We Guarantee Your Best Experience. In Joining Us</h1>
        <hr/>
        <p>Sunset is the time of day when our sky meets the outer space solar winds. There 
            are blue, pink, and purple swirls, spinning 
            and twisting, like clouds of balloons caught 
            in a whirlwind. The sun moves slowly to hide
            behind the line of horizon, while the moon races
            to take its place in prominence atop the night sky. 
            People slow to a crawl, entranced, fully forgetting the
            deeds that must still be done. There is a coolness, a calmness,
            when the sun does set.
        </p>
        <div class="last-text">
            <div class="text1">
                <h3>200+</h3>
                <h5>Countries</h5>
            </div>
            <div class="text2">
                <h3>200+</h3>
                <h5>Members</h5>
            </div>
        </div>

      </div>
    </section>      
    </div>
   
  );
};

export default AboutUs;