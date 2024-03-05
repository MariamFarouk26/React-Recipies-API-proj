/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getrecpie } from '../redux/slice/Getdetails';

const Recent = () => {
  const [recent, setRecent] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const API_RANDOM_URL = 'https://www.themealdb.com/api/json/v1/1/random.php';

  async function getRecent() {
    const check = localStorage.getItem('recent');

    if (check) {
      setRecent(JSON.parse(check));
    } else {
      const fetchRandomData = async () => {
        const response = await fetch(API_RANDOM_URL);
        const data = await response.json();
        return data;
      };

      const fetchedData = await Promise.all(
        Array.from({ length: 6 }, () => fetchRandomData())
      );
      setRecent(fetchedData);
      localStorage.setItem('recent', JSON.stringify(fetchedData));
    }
  }

  function handleClick(meal) {
    console.log(meal);
    dispatch(getrecpie(meal));
    navigate(`/Details/${meal[0].idMeal}`);
  }

  useEffect(() => {
    getRecent();
  }, []);

  return (
    <>
      <div style={{ marginBlock: '5em' }}>
        <div className="container-fluid">
          <div className="row g-5 mx-auto">
            <h2 style={{ fontWeight: '700', fontSize: "3rem" }}>Explore Recipes</h2>
            {recent.map((data, index) => {
              const meal = data.meals ? data.meals[0] : null;
              if (!meal) return null;
              return (
                <div className="col-md-4 col-sm-6" key={meal.idMeal}>
                  <div
                    className="overflow-hidden position-relative h-100"
                    style={{ cursor: 'pointer' }}
                    onClick={() => handleClick([meal])}
                  >
                    <div className="border rounded h-100 overflow-hidden">
                      <div className="w-100">
                        <img
                        style={{maxHeight: '250px', objectFit: 'cover'}}
                          className="w-100"
                          src={meal.strMealThumb}
                          alt={meal.strMeal}
                        />
                        <div
                          className="position-absolute bg-white rounded py-1 px-2"
                          style={{ top: '10px', right: '20px' }}
                        >
                          <i class="bi bi-bookmark" style={{ color: '#198754' }} onClick={() => {
                            console.log("here")
                          }}></i>
                          {/* <i
                            className="bi bi-bookmark-fill"
                            style={{ color: '#198754' }}
                          ></i> */}
                        </div>
                      </div>

                      <div className="p-3">
                        <h5 className="fw-700" style={{ fontSize: "1.5rem"}}>{meal.strMeal}</h5>
                        <p className="m-0 text-muted" style={{ fontWeight: "500"}}>{meal.strArea}</p>
                        <p className="m-0 text-muted" style={{ fontWeight: "500"}}>{meal.strCategory}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* <Wrapper>
        <h3>
          <b>Recent Recipies</b>
        </h3>
        <Wrapper></Wrapper>
        <Splide
          options={{
            arrows: false,
            pagination: false,
            drag: 'free',
            gap: '2rem',
            perPage: 4,
            breakpoints: {
              768: {
                perPage: 2,
              },
              480: {
                perPage: 1,
              },
            },
          }}
        >
          {recent.map((data, index) => {
            const meal = data.meals ? data.meals[0] : null;
            if (!meal) return null;
            return (
              <SplideSlide key={index}>
                <Card>
                  <img src={meal.strMealThumb} alt={meal.strMeal} />
                  <Overlay>
                    <h4>{meal.strMeal}</h4>
                  </Overlay>
                </Card>
              </SplideSlide>
            );
          })}
        </Splide>
      </Wrapper> */}
    </>
  );
};

export default Recent;
