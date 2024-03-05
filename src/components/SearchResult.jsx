import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ClipLoader from 'react-spinners/ClipLoader';
import { getrecpie } from '../redux/slice/Getdetails';
// import { getrecpie } from '../redux/slice/Getdetails';

const SearchResult = ({ filteredData }) => {
  const [displayCount, setDisplayCount] = useState(21);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  if (!filteredData) {
    return (
      <div className="text-center">
        <ClipLoader color="#198754" />
      </div>
    );
  }

  if (filteredData.length === 0) {
    return <h3>No data found</h3>;
  }

  function handleClick(data) {
    console.log(data.idMeal)
    dispatch(getrecpie(data));
    navigate(`/details/${data.idMeal}`);
  }

  const handleShowMore = () => {
    setDisplayCount(displayCount + 4);
  };

  return (
    <div className="row g-5">
      {filteredData.slice(0, displayCount)?.map((data) => {
        return (
          <div className="col-lg-4 col-md-6" key={data.idMeal}>
            <div
              className="overflow-hidden position-relative h-100"
              style={{ cursor: 'pointer' }}
              onClick={() => handleClick(data)}
            >
              <div className="border rounded h-100 overflow-hidden">
                <div className="w-100">
                  <img
                    className="w-100"
                    src={data.strMealThumb}
                    alt={data.strMeal}
                  />
                  <div
                    className="position-absolute bg-white rounded py-1 px-2"
                    style={{ top: '10px', right: '20px' }}
                  >
                    <i class="bi bi-bookmark"></i>
                    {/* <i
                      className="bi bi-bookmark-fill"
                      style={{ color: '#198754' }}
                    ></i> */}
                  </div>
                </div>

                <div className="p-3">
                  <h5 className="fw-700">{data.strMeal}</h5>
                  <p className="m-0 text-muted">{data.strArea}</p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SearchResult;
