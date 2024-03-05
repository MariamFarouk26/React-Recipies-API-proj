/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Search from '../components/Search';
import CategoryList from '../components/CategoryList';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Category = () => {
  const [category, setCategory] = useState([]);
  const categoriesArr = JSON.parse(localStorage.getItem('Categories_List')).map(
    (category) => {
      return category.strCategory;
    }
  );
  //   console.log(categoriesArr)

    async function getCategoriesData(category) {
        const check = localStorage.getItem(category);
        if (check) {
            setCategory(pre => [...pre, ...JSON.parse(check)]);
        } else {
            const { data: { meals } } = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
            // console.log(meals)
            setCategory(pre => [...pre, ...meals]);
            localStorage.setItem(category, JSON.stringify(meals));
        }
    }

  function getCategories() {
    categoriesArr.map((country) => {
      return getCategoriesData(country);
    });
  }

  useEffect(() => {
    getCategories();
  }, []);

  console.log('Cuisine component rendered');
  console.log(category);

  return (
    <>
      <Navbar></Navbar>
      <div className="container-fluid cuisine" style={{ padding: '2rem' }}>
        <div className="row">
          <div className="col-12">
            <div className="banner Catbanner rounded-4 overflow-hidden d-flex align-items-center justify-content-center">
              <h1>Categories</h1>
            </div>
          </div>
        </div>

        <div id="search" className="row my-5">
          <div className="col-md-2">
            <CategoryList categoriesArr={categoriesArr} />
          </div>
          <div className="col-md-10 ps-4">
            <Search allData={category} />
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Category;
