import React, { useEffect, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import Recipe from './SearchResult';
import styled from 'styled-components';
import Country from './countryList';
import Cuisine from '../pages/cuisine';
import CountryList from './countryList';
import { NavLink } from 'react-router-dom';

export default function FoodCat() {
  const [data, setData] = useState([]);
  const [filteredRecipes, setFilteredRecipes] = useState(null);

  const getAllData = async () => {
    let newData = [];
    let newFilteredRecipes = [];

    if (localStorage['Categories_List']) {
      const parsedData = await JSON.parse(
        localStorage.getItem('Categories_List')
      );

      newData = [...newData, ...parsedData];
      newFilteredRecipes = [...newFilteredRecipes, ...parsedData];
    } else {
      return null;
    }

    setData(newData);
    setFilteredRecipes(newFilteredRecipes);

    console.log(filteredRecipes);
  };

  useEffect(() => {
    getAllData();
  }, []);

  function search(e) {
    let searchVal = e.target.value;
    let searchResult;

    searchResult = data.filter((el) => {
      return el.strMeal.toLowerCase().includes(searchVal.toLowerCase());
    });

    console.log(searchResult);

    setFilteredRecipes(searchResult);
  }

  return (
    <Container>
      <SearchContainer>
        <FaSearchIcon size={24} />
        <SearchInput
          type="text"
          placeholder="Search for recipes..."
          onChange={search}
        />
      </SearchContainer>

      {filteredRecipes ? (
        <List>
          {filteredRecipes.map((el) => {
            //   <SLink to={'/cuisine/Italian'}>
            <h4>{el.strCategory}</h4>;
            {
              /* </SLink> */
            }
          })}
        </List>
      ) : (
        <div>loading</div>
      )}

      {/* <Cuisine cuisine={filteredRecipes}></Cuisine> */}

      {/* <RecipeList>
           <Recipe data={filteredRecipes} />
         </RecipeList> */}
    </Container>
  );
}

const Container = styled.div`
  margin: 0 auto;
  padding: 20px;
`;

const SearchContainer = styled.div`
  max-width: 800px;
  position: relative;
  margin: auto;
`;

const SearchInput = styled.input`
  padding: 10px 10px 10px 40px;
  border: none;
  border-radius: 5px;
  outline: none;
  background-color: #333;
  color: #fff;
  width: 100%;

  &::placeholder {
    color: #ccc;
  }
`;

const FaSearchIcon = styled(FaSearch)`
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
  color: #fff;
  z-index: 1;
`;

const RecipeList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(1fr));
  grid-gap: 10px;
`;

const List = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0rem;

  @media (max-width: 780px) {
    flex-wrap: wrap;
    gap: 2rem;
    justify-content: center;
  }
`;

const SLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-right: 2rem;
  text-decoration: none;
  background: linear-gradient(35deg, #494949, #313131);
  width: 6rem;
  height: 6rem;
  cursor: pointer;
  transform: scale(1);
  transition: transform 0.3s ease-in-out;

  h4 {
    color: white;
    font-size: 0.8rem;
  }

  svg {
    color: white;
    font-size: 1.5rem;
  }

  &.active {
    background: linear-gradient(to right, #4fd585, #24aa5a);

    svg {
      color: white;
    }

    h4 {
      color: white;
    }
  }

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 480px) {
    margin: 1rem;
  }
`;
