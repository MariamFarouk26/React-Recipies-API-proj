import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CategoryList from './CategoryList';
import Search from './Search';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Cat() {
  const [data, setData] = useState([]);
  const { category } = useParams();

  const categoriesArr = JSON.parse(localStorage.getItem('Categories_List')).map(
    (category) => {
      return category.strCategory;
    }
  );

  const getAllData = async () => {
    let newData = [];

    if (localStorage[category]) {
      const parsedData = JSON.parse(localStorage.getItem(category));

      newData = [...newData, ...parsedData];
    }

    setData(newData);

    console.log(newData);
  };

  useEffect(() => {
    console.log(category);
    getAllData();
  }, [category]);

  return (
    <>
      <Navbar></Navbar>
      <div className="container-fluid cuisine" style={{ padding: '2rem' }}>
        <div className="row">
          <div className="col-12">
            <div className="banner Catbanner rounded-4 overflow-hidden d-flex align-items-center justify-content-center">
              <h1>{category}</h1>
            </div>
          </div>
        </div>

        <div id="search" className="row my-5">
          <div className="col-md-2">
            <CategoryList categoriesArr={categoriesArr} />
          </div>
          <div className="col-md-10 ps-4">
            <Search allData={data} />
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
