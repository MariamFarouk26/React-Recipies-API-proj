/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Search from '../components/Search';
import CountryList from '../components/countryList';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Cuisine = () => {
  const [cuisine, setCuisine] = useState([]);
  const countriesArr = ['Egyptian', 'American', 'Italian', 'Thai', 'Japanese'];

  async function getCountryData(country) {
    const check = localStorage.getItem(country);
    if (check) {
      setCuisine((pre) => [...pre, ...JSON.parse(check)]);
    } else {
      const {
        data: { meals },
      } = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/filter.php?a=${country}`
      );
      // console.log(meals)
      setCuisine((pre) => [...pre, ...meals]);
      localStorage.setItem(country, JSON.stringify(meals));
    }
  }

  function getCuisine() {
    countriesArr.map((country) => {
      return getCountryData(country);
    });
  }

  useEffect(() => {
    getCuisine();
  }, []);

  console.log('Cuisine component rendered');
  console.log(cuisine);

  return (
    <>
      <Navbar></Navbar>
      <div className="container-fluid cuisine" style={{ padding: '2rem' }}>
        <div className="row">
          <div className="col-12">
            <div className="banner Countrybanner rounded-4 overflow-hidden d-flex align-items-center justify-content-center">
              <h1>Recipes</h1>
            </div>
          </div>
        </div>

        <div id="search" className="row my-5">
          <div className="col-md-2">
            <CountryList />
          </div>
          <div className="col-md-10 ps-4">
            <Search allData={cuisine} />
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Cuisine;
