/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import SearchResult from '../components/SearchResult';
// import CountryList from '../components/countryList';
// import { NavLink } from 'react-router-dom';
import Search from '../components/Search';
import CountryList from '../components/countryList';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Country() {
  const [data, setData] = useState([]);
  // const [filteredRecipes, setFilteredRecipes] = useState(null);

  const { country } = useParams();

  const getAllData = async () => {
    let newData = [];
    // let newFilteredRecipes = [];

    if (localStorage[country]) {
      const parsedData = JSON.parse(localStorage.getItem(country));

      newData = [...newData, ...parsedData];
      // newFilteredRecipes = [...newFilteredRecipes, ...parsedData];
    }

    setData(newData);
    // setFilteredRecipes(newFilteredRecipes);

    console.log(newData);
  };

  useEffect(() => {
    // console.log(country);
    getAllData();
  }, [country]);

  // function search(e) {
  //   let searchVal = e.target.value;
  //   let searchResult;

  //   searchResult = data.filter((el) => {
  //     return el.strMeal.toLowerCase().includes(searchVal.toLowerCase());
  //   });

  //   console.log(searchResult);

  //   setFilteredRecipes(searchResult);
  // }

  return (
    <>
    <Navbar></Navbar>
     <div className="container-fluid cuisine" style={{ padding: '2rem' }}>
      <div className="row">
        <div className="col-12">
          <div style={{  background: `url("/images/${country}.jpg") no-repeat`, backgroundPosition: 'center'}} className="banner rounded-4 overflow-hidden d-flex align-items-center justify-content-center">
            <h1>{country}</h1>
          </div>
        </div>
      </div>

      <div id="search" className="row my-5">
        <div className="col-md-2">
          <CountryList />
        </div>
        <div className="col-md-10 ps-4">
          <Search allData={data} />
        </div>
      </div>
    </div>
    <Footer></Footer>
    {/* <Container>
      <SearchContainer>
        <FaSearchIcon size={24} />
        <SearchInput
          type="text"
          placeholder="Search for recipes..."
          onChange={search}
        />
      </SearchContainer>

        <CountryList/>

      <SearchResult filteredData={filteredRecipes}></SearchResult>
    </Container> */}
    </>
  );
}

// const SearchContainer = styled.div`
//   max-width: 600px;
//   position: relative;
//   margin-bottom: 1.6rem;
// `;

// const SearchInput = styled.input`
//   padding: 10px 10px 10px 40px;
//   border: 1px solid #494949;
//   border-radius: 0.8rem;
//   // outline: none;
//   color: #1c1c1c;
//   width: 100%;

//   &::placeholder {
//     color: #1c1c1c;
//   }
// `;

// const IoSearch = styled(IoSearchOutline)`
//   position: absolute;
//   top: 50%;
//   left: 10px;
//   transform: translateY(-50%);
//   color: #1c1c1c;
//   z-index: 1;
// `;
