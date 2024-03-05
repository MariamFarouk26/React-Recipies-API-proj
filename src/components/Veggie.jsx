/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
// import styled from 'styled-components';
// import { Splide, SplideSlide } from '@splidejs/react-splide';
// import '@splidejs/react-splide/css';

const Veggie = () => {
  const [veggie, setVeggie] = useState([]);
  const API_RANDOM_URL = 'https://www.themealdb.com/api/json/v1/1/random.php';

  async function getVeggie() {
    const check = localStorage.getItem('veggie');

    if (check) {
      setVeggie(JSON.parse(check));
    } else {
      const fetchRandomData = async () => {
        const response = await fetch(API_RANDOM_URL);
        const data = await response.json();
        return data;
      };

      const fetchedData = await Promise.all(
        Array.from({ length: 6 }, () => fetchRandomData())
      );
      setVeggie(fetchedData);
      localStorage.setItem('veggie', JSON.stringify(fetchedData));
      console.log(veggie);
    }
  }

  useEffect(() => {
    getVeggie();
  }, []);

  return (
    <div className='mt-5 mb-2'>
      <div className="container-fluid">
        <div className="row g-5 mx-auto">
        <h2 style={{fontWeight: '600'}}>Veggies</h2>
          {veggie.map((data) => {
            const [meal] = data.meals || [];
            return (
              <div className="col-md-4 " key={meal.idMeal}>
                <div className="border rounded overflow-hidden position-relative">
                  <div className="w-100">
                    <img
                      className="w-100"
                      src={meal.strMealThumb}
                      alt={meal.strMeal}
                    />
                    <div className='position-absolute bg-white rounded py-1 px-2' style={{top: '10px', right: '20px'}}>
                    {/* <i class="bi bi-bookmark"></i> */}
                    <i className="bi bi-bookmark-fill" style={{color: '#198754'}}></i>
                  </div>
                  </div>
                  
                  <div className="p-3">
                    <h5 className='fw-700'>{meal.strMeal}</h5>
                    <p className="m-0 text-muted">{meal.strArea}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Veggie;
