/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { v4 as uuid } from "uuid";
import RecentJunior from "./recentJunior";

const Fav = () => {
  let logedInUser = useSelector((state) => state.logedInUser.logedInUser);
  let [favRecipies, setfavRecipies] = useState([]);

  useEffect(() => {
    if (logedInUser) {
      setfavRecipies(logedInUser.favourite);
    }
  }, []);

  useEffect(() => {
    if (logedInUser) {
      setfavRecipies(logedInUser.favourite);
    } else {
      setfavRecipies(null);
    }
  }, [logedInUser]);
  console.log(logedInUser);
  console.log(favRecipies);
  return (
    <>
      <div style={{ marginBlock: "5em" }}>
        <div className="container-fluid">
          <div className="row g-5 mx-auto">
            <h2 style={{ fontWeight: "600" }}>Favorites recipes</h2>

            {favRecipies.map((r) => (
              <RecentJunior key={uuid()} meal={r}></RecentJunior>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Fav;
