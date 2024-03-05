/* eslint-disable react-hooks/exhaustive-deps */

// https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood
// https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian

import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import SearchResult from './SearchResult';
// import CountryList from './countryList';
// import { NavLink } from 'react-router-dom';
import { IoSearchOutline } from "react-icons/io5";


export default function Search({ allData }) {
  const [data, setData] = useState([]);
  const [filteredRecipes, setFilteredRecipes] = useState(null);

  const getAllData = async () => {
    setData(allData);
    setFilteredRecipes(allData);

    console.log(data);
  };

  useEffect(() => {
    getAllData();
  }, [allData]);

  function search(e) {
    let searchVal = e.target.value;
    let searchResult;

    searchResult = data.filter((el) => {
      return el.strMeal.toLowerCase().includes(searchVal.toLowerCase());
    });

    setFilteredRecipes(searchResult);
  }

  console.log('Search component rendered');
  console.log(allData);

  return (
    
      <div>
        <SearchContainer>
          <IoSearch size={24} />
          <SearchInput
            type="text"
            placeholder="Search for recipes..."
            onChange={search}
          />
        </SearchContainer>

        <SearchResult filteredData={filteredRecipes}></SearchResult>
      </div>
 
  );
}

const SearchContainer = styled.div`
  max-width: 600px;
  position: relative;
  margin-bottom: 1.6rem;
`;

const SearchInput = styled.input`
  padding: 10px 10px 10px 40px;
  border: 1px solid #494949;
  border-radius: 0.8rem;
  // outline: none;
  color: #1c1c1c;
  width: 100%;

  &::placeholder {
    color: #1c1c1c;
  }
`;

const IoSearch = styled(IoSearchOutline)`
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
  color: #1c1c1c;
  z-index: 1;
`;
