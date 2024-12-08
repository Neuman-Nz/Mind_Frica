import React from 'react'

const Organization = () => {
  return (
    <div>
    <section className="what-we-do-section">
      {/* Image container with blur */}
      <div className="image-container">
        <img
          src="https://i.postimg.cc/FKxBxWgF/mindooo1.jpg" // Replace with your image URL
          alt="What We Do"
          className="background-image"
        />
      </div>

      {/* Vertical line on the left */}
      <div className="vertical-line"></div>
      <div className="vertical-line2"></div>

      {/* White line with title */}
      <div className="white-line">
        <div className="line-extension left"></div>
        <div className="line-extension right"></div>
      </div>

      <div className="white-line2">
        <div className="line-extension left"></div>
        <div className="line-extension right"></div>
      </div>

      {/* Organization title */}
      <h4 className="organization-title">STRUCTURE</h4>

      {/* Main title */}
      <h1 className="title">HIERARCHY OF MIND AFRICA</h1>
    </section>

    {/* New Section */}
    <section className="new-section">
      {/* Vertical lines */}
      <div className="new-vertical-line left"></div>
      <div className="new-vertical-line right"></div>

      {/* Horizontal lines */}
      {/* <div className="new-horizontal-line top"></div> */}
      <div className="new-horizontal-line bottom"></div>

      {/* Content in the middle */}
      <div className="section-content ">
        <h2 className="section-title">MIND ORGANIZATION</h2>
        <p className="section-paragraph">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum eveniet velit rerum quae ea obcaecati. Repellendus asperiores veniam minus ipsam assumenda distinctio voluptatibus inventore quisquam?
        </p>
      </div>

      {/* Small vertical line and arrow */}
      <div className="arrow-container">
        <div className="small-vertical-line"></div>
        <div className="arrow-circle">
          <span className="arrow">&#8595;</span> {/* Downward arrow */}
        </div>
      </div>
    </section>

    <section className='grid section'>
      <div className="grid-container">
        <div className="image-item4">
          <img src='https://i.postimg.cc/vBBq3nsx/mind-pic2.jpg'/>
          <h3 className="grid-title">Title 1</h3>
          <p className="grid-description">Description for the first image.</p>
        </div>
        </div>

    </section>

    <section className="section-3">
              <div className="section-3-container-3">
                {/* Left side with content */}
                <div className="section-content-left-3">
                  <h2 className="section-title-3">Section 3 Title</h2>
                  <p className="section-paragraph-3">
                    This is a paragraph that gives a brief description <br /> of the section content. Click <br /> read more for further details.
                  </p>
                  <a href="#" className="read-more-3">
                    <span>Read More</span>
                    <i className="arrow-3">→</i>
                  </a>
                </div>

                {/* Vertical Line */}
                <div className="vertical-line-3"></div>

                {/* Right side with image */}
                <div className="section-image-3">
                  <div className="image-container-3">
                    <img src="https://i.postimg.cc/fWx9xdh8/mindpic003.jpg" alt="Section Image" className="round-image-3" />
                  </div>
                </div>
              </div>

              {/* Inverted layout below */}
              <div className="section-3-container-3 inverted-3">
                {/* Right side with content */}
                <div className="section-content-left-3">
                  <h2 className="section-title-3">Section 3 Title</h2>
                  <p className="section-paragraph-3">
                    This is a paragraph that gives a brief description <br /> of the section content. Click <br /> read more for further details.
                  </p>
                  <a href="#" className="read-more-3">
                    <span>Read More</span>
                    <i className="arrow-3">→</i>
                  </a>
                </div>

                {/* Vertical Line */}
                <div className="vertical-line-3"></div>

                {/* Left side with image */}
                <div className="section-image-3">
                  <div className="image-container-3">
                    <img src="https://i.postimg.cc/mgDk6XPg/mindpic005.jpg" alt="Section Image" className="round-image-3" />
                  </div>
                </div>
              </div>
    </section>

    <section className="new-section">
      {/* Vertical lines */}
      <div className="new-vertical-line left"></div>
      <div className="new-vertical-line right"></div>

      {/* Horizontal lines */}
      {/* <div className="new-horizontal-line top"></div> */}
      <div className="new-horizontal-line bottom"></div>

      {/* Content in the middle */}
      <div className="section-content">
        <h2 className="section-title">OUR OPERATIONS</h2>
        <p className="section-paragraph">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, fugit? Maiores quo nobis, facilis sequi doloremque error voluptates ipsum rerum adipisci minus officia, facere porro molestiae rem laborum ab voluptatum.
        </p>
      </div>

      {/* Small vertical line and arrow */}
      <div className="arrow-container">
        <div className="small-vertical-line"></div>
        {/* <div className="arrow-circle">
          <span className="arrow">&#8595;</span>
        </div> */}
      </div>
    </section>

    <footer>
      {/* Your footer content goes here */}
    </footer>
  </div>
  )
}

export default Organization