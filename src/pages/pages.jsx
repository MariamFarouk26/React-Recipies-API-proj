import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./home";
import React from "react";
import Signin from "./signin";
import Cuisine from "./cuisine";
import Search from "../components/Search";
import Error from "../components/Error";
import Contact from "../components/contact";
import Category from "./category";
import Country from "./country";
// import Details from "./Details";
import store from "../redux/store";
import { Provider } from "react-redux";
import AddRecipe from "./AddRecipe";
import Login from "./Login";
import Details from "./Details";
import Blog from "./blog";
import Cat from "../components/Cat";
import CartPage from "./CartPage";
import Premiumpage from "./premiumpage";
import FavPage from "./favPage";

const Pages = () => {

    console.log("Pages component rendered")
    return ( 
        <div>
            <Provider store={store}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home />}></Route>
                        <Route path="/home" element={<Home />}></Route>
                        <Route path="/signin" element={<Signin />}></Route>
                        <Route path="/login" element={<Login />}></Route>
                        <Route path="/search" element={<Search />}></Route>
                        <Route path="/cuisine" element={<Cuisine />}></Route>
                        <Route path="/cuisine/:country" element={<Country />}></Route>
                        <Route path="/category" element={<Category />}></Route>
                        <Route path="/categories/:category" element={<Cat />}></Route>
                        <Route path="/details/:id" element={<Details />}></Route>
                        <Route path="/cart" element={<CartPage />}></Route>
                        <Route path="/premium" element={<Premiumpage />}></Route>
                        <Route path="/fav" element={<FavPage />}></Route>
                        <Route path="/addrecpie" element={<AddRecipe />}></Route>
                        {/* <Route path="/addrecipe/:id" element={<AddRecipe />}></Route> */}
                        <Route path="/blog" element={<Blog />}></Route>
                        <Route path="/contact" element={<Contact />}></Route>
                        <Route path="*" element={<Error message="404 - Oops! Something went wrong." />}></Route>
                    </Routes>
                </BrowserRouter>
            </Provider>
        </div>
    );
}
 
export default Pages;