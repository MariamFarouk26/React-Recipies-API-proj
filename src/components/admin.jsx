import React from 'react';
import { Link } from 'react-router-dom';

const Admin = () => {
  return (
    <div className="recipe-container">
      <div className="left-content">
        <img src="images/admin.jpg" alt="Recipe" className="recipe-image" />
      </div>
      <div className="right-content" style={{ margin: '2rem 1rem'}}>
        <h1>Share your recipe</h1>
        <p>A recipe is simply defined as a set of instructions with a list of ingredients used to prepare a particular food, dish, or drink. People use recipes to replicate foods they enjoy that they otherwise do not know how to make. Chefs use recipes to make sure a dish tastes the same each time it is ordered.</p>
        <button className="green-button">
          <Link to="/addrecipe" className="nav-link active">
            Create Recipe
          </Link>
        </button>
      </div>
    </div>
  );
};


const styles = `
  .recipe-container {
    display: flex;
    flex-direction: column-reverse; /* Reverse the column order for smaller screens */
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin: 0 auto;
    padding: 20px;
  }

  .left-content {
    flex: 1;
    margin-right: 20px;
  }

  .recipe-image {
    width: 100%;
    height: auto;
    border-radius: 8px;
  }

  h1 {
    color: #198754;
    text-align: center;
  }

  p {
    font-size: 18px; /* Increase font size for better readability */
    line-height: 1.6; /* Increase line height */
    color: #333; /* Change font color to a good color */
  }

  .green-button {
    background-color: #4CAF50;
    border: none;
    color: white;
    padding: 12px 24px; /* Adjust padding for better button appearance */
    text-align: center;
    text-decoration: none;
    display: block;
    font-size: 18px;
    cursor: pointer;
    border-radius: 5px;
    margin: auto;
  }

  .green-button:hover {
    background-color: #45a049;
  }

  .right-content {
    flex: 1;
    text-align: center; /* Center text for smaller screens */
  }

  @media screen and (min-width: 768px) {
    .recipe-container {
      flex-direction: row;
    }

    .left-content {
      margin: 2rem 0;
    }

    .right-content {
      margin: 2rem 0;
      text-align: left;
    }
  }
`;

// Append styles to head
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

export default Admin;
