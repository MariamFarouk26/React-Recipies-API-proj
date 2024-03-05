import React, { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';

const CategoryList = ({ categoriesArr }) => {
  const [currCategory, setCurrCategory] = useState('');

  const { category } = useParams();

  useEffect(() => {
    setCurrCategory(category);
    console.log(categoriesArr);
  }, [category]);

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center">
        <h5 style={{ fontWeight: '600' }}>Category</h5>

        <NavLink to={'/category'}>
          <h4
            className="text-success"
            style={{ fontSize: '1rem', fontWeight: '400' }}
          >
            Clear
          </h4>
        </NavLink>
      </div>

      <div id="countryList">
        {categoriesArr.map((cat) => {
          return (
            <NavLink className="listCountry" to={`/categories/${cat}`}>
              <h4
                className={currCategory === cat ? 'text-success' : 'text-dark'}
              >
                {cat}
              </h4>
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryList;
