/* eslint-disable react-hooks/exhaustive-deps */
// import Categories from "../components/Categories";
// import Veggie from "../components/Veggie";
// import Veggie from "../components/Veggie";
import Popular from "../components/popular";
import React, { useEffect } from "react";
// import Recent from "../components/recent";
import Categories from "../components/categories";
import Footer from "../components/Footer";
import Header from "../components/header";
import Admin from "../components/admin";
import { useSelector } from "react-redux";
// import Blogs from "../components/Blogs";
import axios from "axios";
import NewRecipes from "../components/newRecipes";
import RecentJ from "../components/recentJ";
// import Blogs from "../components/Blogs";

const Home = () => {
    let logedInUser = useSelector((state) => state.logedInUser.logedInUser);
    const countriesArr = ["Egyptian", "American", "Italian", "Thai", "Japanese"];

    async function getCountryData(country) {
        const check = localStorage.getItem(country);
        if (!check) {
            const { data: { meals } } = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${country}`);
            // console.log(meals)
            localStorage.setItem(country, JSON.stringify(meals));
        }
    }

    function getCuisine() {
        countriesArr.map(country => {
            return getCountryData(country);
        });
    }

    useEffect (() =>{   
        getCuisine();
    }, []);

    useEffect(() => {
     
    }, []);
    console.log("Home component rendered");

    return (
        <>
            <Header />
     
            {logedInUser?.isAdmin && <Admin />}
  
            <div style={{ padding: "0 1%" }}>
                {/* <Veggie /> */}
                <Popular />
                <Categories />
                {/* <Recent /> */}
                <RecentJ />
            </div>
            <NewRecipes />
            {/* <Blogs /> */}
            <Footer />
        </>
    );
}
 
export default Home;
