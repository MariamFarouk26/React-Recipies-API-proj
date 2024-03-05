import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const API_CATEGORIES_LIST_URL =
    'https://www.themealdb.com/api/json/v1/1/categories.php';

  async function getCategories() {
    const check = localStorage.getItem('Categories_List');

    if (check) {
      setCategories(JSON.parse(check));
    } else {
      const { categories } = await fetch(API_CATEGORIES_LIST_URL)
        .then((res) => res.json())
        .then((data) => data);
      setCategories(categories);
      localStorage.setItem('Categories_List', JSON.stringify(categories));
    }
  }

  useEffect(() => {
    getCategories();
  }, []);

  const displayedCategories = categories.slice(0, 12);

  console.log("Categories component rendered");
  console.log(displayedCategories);
  
  return (
    <div className="mb-2" style={{ marginTop: '5em' }}>
      <div className="container-fluid">
        <div className="row g-5 mx-auto">
          <div className="d-flex justify-content-between">
            <h2 style={{ fontWeight: '700', fontSize: "3rem" }}>Categories</h2>
            <button className="btn">
              <Link to="/category" className="text-success text-decoration-none fw-bold">
                View more
              </Link>
            </button>
          </div>
          <Container>
            {displayedCategories?.map((category) => (
              <Card key={category.idCategory}>
                <Link className="nav-link" to="/category">
                  <Category>
                    <CategoryImage
                      src={category.strCategoryThumb}
                      alt={category.strCategory}
                    />
                    <CategoryName>{category.strCategory}</CategoryName>
                  </Category>
                </Link>
              </Card>
            ))}
          </Container>
        </div>
      </div>
    </div>
  );
};
const Card = styled.div`
  position: relative;
  overflow: hidden;
  cursor: pointer;

  img {
    width: 100%;
    display: block;
    border-radius: 1rem;
    transition: transform 0.3s ease-in-out;
  }

  &:hover img {
    transform: scale(1.1); 
  }
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  
  @media (max-width: 767px) {
    justify-content: center;
  }
`;

const Category = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  object-fit: contain;
  transition: transform 0.3s ease-in-out;
`;

const CategoryImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 10px;
`;

const CategoryName = styled.h4`
  font-family: 'Poppins', sans-serif;
  font-size: 18px;
  font-weight: 600;
  text-align: center;
  margin-top: 10px;
`;

export default Categories;
