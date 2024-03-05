import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { setLogedInUser } from "../redux/slice/logedInUser";
import { getrecpie } from "../redux/slice/Getdetails";

const RecentJunior = ({ meal }) => {
  const logedInUser = useSelector((state) => state.logedInUser.logedInUser);
  const [favRecipies, setFavRecipies] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (logedInUser) {
      setFavRecipies(logedInUser.favourite || []);
    }
  }, [logedInUser]);

  const handleUpdate = (updatedUser) => {
    axios.put(`http://localhost:3001/Users/${logedInUser.id}`, updatedUser)
      .then((res) => {
        const updatedUser = res.data;
        dispatch(setLogedInUser(updatedUser));
      })
      .catch((err) => {
        console.error("Error updating user:", err);
      });
  };

  const handleClick = () => {
    dispatch(getrecpie([meal]));
    navigate(`/Details/${meal.idMeal}`);
  };

  const handleFavourite = () => {
    if (!logedInUser) {
      alert("You need to login");
      return;
    }

    const foundRecipe = favRecipies.find((r) => r.idMeal === meal.idMeal);
    if (foundRecipe) {
      const filteredFav = favRecipies.filter((r) => r.idMeal !== meal.idMeal);
      handleUpdate({ ...logedInUser, favourite: filteredFav });
      setFavRecipies(filteredFav);
    } else {
      const updatedFav = [...favRecipies, { ...meal }];
      handleUpdate({ ...logedInUser, favourite: updatedFav });
      setFavRecipies(updatedFav);
    }
  };

  return (
    <div className="col-md-4 col-sm-6">
      <div className="overflow-hidden position-relative h-100" style={{ cursor: "pointer" }}>
        <div className="border rounded h-100">
          <div className="w-100">
            <img
              style={{ height: "300px", objectFit: "cover" }}
              className="w-100"
              src={meal.strMealThumb}
              alt={meal.strMeal}
              onClick={handleClick}
            />
            <div
              className="position-absolute bg-white rounded py-1 px-2"
              style={{ top: "10px", right: "20px" }}
              onClick={handleFavourite}
            >
              <i
                className={favRecipies.find((r) => r.idMeal === meal.idMeal) ? "bi bi-bookmark-fill" : "bi bi-bookmark"}
                style={{ color: "#198754" }}
              ></i>
            </div>
          </div>
          <div className="p-3">
            <h5 onClick={handleClick} className="fw-700">{meal.strMeal}</h5>
            <p onClick={handleClick} className="m-0 text-muted">{meal.strArea}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentJunior;
