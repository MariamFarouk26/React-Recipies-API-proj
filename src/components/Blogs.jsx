import React from 'react';

const Blogs = () => {
  return (
    <>
    <br></br>
    <h1 className="demo" style={{ fontWeight: '700', fontSize: "3rem" }}>Blog</h1>
    <br></br>
    <div className="blogs-container" style={{ height: 'auto' }}>
      
      <div className="blog">
        <img src="/images/Health-Benefits-Of-Fasting-In-Ramadan-01-800x800-1.jpg" alt="Blog 1" className="blog-image" />
        <h2>Benefits of Fasting</h2>
        <p>May support weight loss. Studies show that controlling the times we eat – or undertaking short-term fasts – may aid weight reduction, fat loss </p>
      </div>
      <div className="blog">
        <img src="/images/sugar-body-diagram-6.jpg" alt="Blog 2" className="blog-image" />
        <h2>Impact of suger consumption.</h2>
        <p>there is continued debate regarding the role sugar plays in physical, neurological, and cognitive health. Excessive sugar consumption </p>
      </div>
      <div className="blog">
        <img src="/images/the-anatomy-of-hypertension-poster-chart__43142.jpg" alt="Blog 1" className="blog-image" />
        <h2>Benefits of Fasting</h2>
        <p>Definition. Low blood pressure occurs when blood pressure is much lower than normal. This means the heart, brain, and other parts of the body may not get enough blood. </p>
      </div>
      <div className="blog">
        <img src="/images/161197234-national-high-blood-pressure-education-month-vector-illustration-suitable-for-greeting-card-poster.jpg" alt="Blog 1" className="blog-image" />
        <h2>What is Hypertension</h2>
        <p>Hypertension (high blood pressure) is when the pressure in your blood vessels is too high (140/90 mmHg or higher). It is common but can be serious if not treated. </p>
      </div>
    </div>
    </>
  );
};

// CSS styles
const styles = `
.blogs-container {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-wrap: wrap;
}

  .blog {
    text-align: center;
    margin: 20px;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    width: 300px;
    background-color: #fff;
  }

  .blog-image {
    width: 100%;
    height: auto;
    border-radius: 8px;
  }

  h2 {
    font-size: 20px;
    margin-top: 10px;
  }

  p {
    font-size: 16px;
    line-height: 1.5;
  }
  .demo{
    text-align:center;
  }
`;

// Append styles to head
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

export default Blogs;