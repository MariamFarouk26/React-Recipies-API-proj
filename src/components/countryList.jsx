import React, { useEffect, useState } from 'react';
import { FaPizzaSlice } from 'react-icons/fa';
import { GiNoodles } from 'react-icons/gi';
import { FaHamburger } from 'react-icons/fa';
import { GiChopsticks } from 'react-icons/gi';
import { FaBowlFood } from 'react-icons/fa6';
import { NavLink, useParams } from 'react-router-dom';

const CountryList = () => {
  const [currCountry, setCurrCountry] = useState('');

  const { country } = useParams();

  useEffect(() => {
    setCurrCountry(country);
    console.log(currCountry);
  }, [country]);

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center">
        <h5 style={{ fontWeight: '600' }}>Country</h5>

        <NavLink to={'/cuisine'}>
          <h4
            className="text-success"
            style={{ fontSize: '1rem', fontWeight: '400' }}
          >
            Clear
          </h4>
        </NavLink>
      </div>

      <div id="countryList">
        <NavLink className="listCountry" to={'/cuisine/Italian'}>
          <FaPizzaSlice
            size={20}
            className={currCountry === 'Italian' ? 'text-success' : 'text-dark'}
          />
          <h4
            className={currCountry === 'Italian' ? 'text-success' : 'text-dark'}
          >
            Italian
          </h4>
        </NavLink>
        <NavLink className="listCountry" to={'/cuisine/American'}>
          <FaHamburger
            size={20}
            className={
              currCountry === 'American' ? 'text-success' : 'text-dark'
            }
          />
          <h4
            className={
              currCountry === 'American' ? 'text-success' : 'text-dark'
            }
          >
            American
          </h4>
        </NavLink>
        <NavLink className="listCountry" to={'/cuisine/Thai'}>
          <GiNoodles
            size={20}
            className={currCountry === 'Thai' ? 'text-success' : 'text-dark'}
          />
          <h4 className={currCountry === 'Thai' ? 'text-success' : 'text-dark'}>
            Thai
          </h4>
        </NavLink>
        <NavLink className="listCountry" to={'/cuisine/Japanese'}>
          <GiChopsticks
            size={20}
            className={
              currCountry === 'Japanese' ? 'text-success' : 'text-dark'
            }
          />
          <h4
            className={
              currCountry === 'Japanese' ? 'text-success' : 'text-dark'
            }
          >
            Japanese
          </h4>
        </NavLink>
        <NavLink className="listCountry" to={'/cuisine/Egyptian'}>
          <FaBowlFood
            size={20}
            className={
              currCountry === 'Egyptian' ? 'text-success' : 'text-dark'
            }
          />
          <h4
            className={
              currCountry === 'Egyptian' ? 'text-success' : 'text-dark'
            }
          >
            Egyptian
          </h4>
        </NavLink>
      </div>
    </div>
  );
};

export default CountryList;
