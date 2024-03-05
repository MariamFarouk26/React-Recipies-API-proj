/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import RecentJunior from "./recentJunior";
import { v4 as uuid } from "uuid";

const RecentJ = () => {
  const [recent, setRecent] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const API_RANDOM_URL = "https://www.themealdb.com/api/json/v1/1/random.php";

  async function getRecent() {
    const check = localStorage.getItem("recent");

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
      localStorage.setItem("recent", JSON.stringify(fetchedData));
    }
  }

  ////

  useEffect(() => {
    getRecent();
  }, []);

  return (
    <>
      <div style={{ marginBlock: "5em" }}>
        <div className="container-fluid">
          <div className="row g-5 mx-auto">
            <h2 style={{ fontWeight: "600" }}>Explore Recipes</h2>
            {recent?.map((data, index) => {
              const meal = data.meals ? data.meals[0] : null;
              if (!meal) return null;
              return <RecentJunior key={uuid()} meal={meal}></RecentJunior>;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default RecentJ;
