import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getrecpie } from '../redux/slice/Getdetails';
import { useNavigate } from 'react-router-dom';
// import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
// import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
// import '@splidejs/react-splide/css';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import '@splidejs/splide/dist/css/splide.min.css';
import { useTranslation } from 'react-i18next';

const Popular = () => {
  const [popular, setPopular] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const API_RANDOM_URL = 'https://www.themealdb.com/api/json/v1/1/random.php';
  const [t, i18n] = useTranslation();

  async function getPopular() {
    const check = localStorage.getItem('popular');

    if (check) {
      setPopular(JSON.parse(check));
    } else {
      const fetchRandomData = async () => {
        const response = await fetch(API_RANDOM_URL);
        const data = await response.json();
        return data;
      };

      const fetchedData = await Promise.all(
        Array.from({ length: 9 }, () => fetchRandomData())
      );
      setPopular(fetchedData);
      localStorage.setItem('popular', JSON.stringify(fetchedData));
    }
  }

  function handleClick(meal) {
    console.log(meal);
    // console.log("2");
    dispatch(getrecpie(meal));
    navigate(`/Details/${meal[0].idMeal}`);
  }

  useEffect(() => {
    getPopular();
  }, []);

  return (
    <>
      <div id="categories" className="mb-3" style={{ marginTop: '5em' }} >
        <div className="container-fluid mb-4">
          <div className="row">
            <h2 style={{ fontWeight: '600', fontSize: "3rem"}}>{t('Popular Picks')}</h2>
          </div>
        </div>
        <Splide
          options={{
            type: 'loop',
            gap: '3em',
            drag: 'free',
            arrows: false,
            pagination: false,
            perPage: 4,
            autoScroll: {
              pauseOnHover: false,
              pauseOnFocus: false,
              rewind: false,
              speed: 1,
            },
            breakpoints: {
              640: { perPage: 3 },
              500: { perPage: 2 },
            },
          }}
          extensions={{ AutoScroll }}
        >
          {popular.map((data, index) => {
            const meal = data.meals ? data.meals[0] : null;
            if (!meal) return null;
            return (
              <SplideSlide key={index}>
                <div
                  className="overflow-hidden position-relative h-100"
                  style={{ cursor: 'pointer' }}
                  onClick={() => handleClick([meal])}
                >
                  <div className="border rounded h-100 overflow-hidden">
                    <div className="w-100">
                      <img
                        className="w-100"
                        src={meal.strMealThumb}
                        alt={meal.strMeal}
                      />
                    </div>

                    <div className="p-3">
                      <h5 className="fw-700" style={{ fontSize: "2rem"}}>{meal.strMeal}</h5>
                      <p className="m-0 text-muted" style={{ fontWeight: "700"}}>{meal.strArea}</p>
                      <p className="m-0 text-muted" style={{ fontWeight: "700"}}>{meal.strCategory}</p>
                    </div>
                  </div>
                </div>
              </SplideSlide>
            );
          })}
        </Splide>
      </div>
    </>
  );
};

export default Popular;
