/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { usersAction, usersPostAction } from "../redux/slice/users";
import { useEffect } from "react";
import Socailf from "../components/Socailf";
import SocialG from "../components/Socialgoogle";

const Signin = () => {
  let Users = useSelector((state) => state.users.users);
  const navigate = useNavigate();
  let dispatch = useDispatch();
  const [user, setUser] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    isAdmin: false,
    favourite: [],
    purchasedDone: [],
    purchased: []
  });

  const handlechange = (event) => {
    const { name, value } = event.target;
    setUser((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  function calculateStorageUsage() {
    let totalUsage = 0;
  
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      const item = localStorage.getItem(key);
  
      // Calculate the size of the item (approximately)
      const itemSize = key.length + item.length;
  
      // Add the size of the item to the total usage
      totalUsage += itemSize;
    }
  
    return totalUsage;
  }
  
  // Calculate and log the total storage usage
  const totalUsage = calculateStorageUsage();
  console.log(`Total storage usage: ${totalUsage} bytes`);
  

  const handleclick = (event) => {
    event.preventDefault();
    const existingUser = Users.find((u) => u.email === user.email);
    if (
      user.email.length < 1 ||
      user.firstName.length < 1 ||
      user.lastName.length < 1 ||
      user.password.length < 1
    ) {
      alert("Data should not be empty");
    } else if (existingUser) {
      alert("Email Already exsists");
    } else {
      dispatch(usersPostAction(user));
      setUser({
        email: "",
        password: "",
        firstName: "",
        lastName: "",
        isAdmin: false,
      });
      navigate("/home");
    }
  };
  useEffect(() => {
    dispatch(usersAction());
    calculateStorageUsage();
  }, [dispatch]);

  return (
    <>
    <section className="text-center text-lg-start">
      <style>
        {`
      .cascading-right {
        margin-right: -50px;
      }

      @media (max-width: 991.98px) {
        .cascading-right {
          margin-right: 0;
        }
      }
      .btngreen{
        color:#198754
      }
      `}
      </style>

      {/* Jumbotron */}
      <div className="container py-4">
        <div className="row g-0 align-items-center">
          <div className="col-lg-6 mb-5 mb-lg-0">
            <div
              className="card cascading-right"
              style={{
                background: "hsla(0, 0%, 100%, 0.55)",
                backdropFilter: "blur(30px)",
              }}
            >
              <div className="card-body p-5 shadow-5 text-center">
                <h2 className="fw-bold mb-5 btngreen">Sign up</h2>
                <form onSubmit={handleclick}>
                  {/* 2 column grid layout with text inputs for the first and last names */}
                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <input
                          type="text"
                          id="form3Example1"
                          name="firstName"
                          className="form-control"
                          placeholder="First name"
                          onChange={handlechange}
                        />
                        <label
                          className="form-label"
                          htmlFor="form3Example1"
                        ></label>
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <input
                          type="text"
                          id="form3Example2"
                          name="lastName"
                          className="form-control"
                          placeholder="last name"
                          onChange={handlechange}
                        />
                        <label
                          className="form-label"
                          htmlFor="form3Example2"
                        ></label>
                      </div>
                    </div>
                  </div>

                  {/* Email input */}
                  <div className="form-outline mb-4">
                    <input
                      type="email"
                      id="form3Example3"
                      className="form-control"
                      name="email"
                      placeholder="Email address"
                      onChange={handlechange}
                    />
                    <label
                      className="form-label"
                      htmlFor="form3Example3"
                    ></label>
                  </div>

                  {/* Password input */}
                  <div className="form-outline mb-4">
                    <input
                      type="password"
                      id="form3Example4"
                      className="form-control"
                      name="password"
                      placeholder="Password"
                      onChange={handlechange}
                    />
                    <label
                      className="form-label"
                      htmlFor="form3Example4"
                    ></label>
                  </div>

                  {/* Submit button */}
                  <button
                    type="submit"
                    className="btn btn-success btn-block mb-4"
                  >
                    Sign up
                  </button>

                  {/* Register buttons */}
                  <div className="text-center">
                    <p>or sign up with:</p>
                    <div>
                      <button
                        type="button"
                        className=" btn btn-link btn-floating mx-1 "
                      >
                        <Socailf />
                      </button>

                      {/* <Google /> */}

                      <button
                        type="button"
                        className="  btn btn-link btn-floating mx-1 "
                        style={{ height: "3.5rem" }}
                      >
                        <SocialG />
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className="col-lg-6 mb-5 mb-lg-0">
            <img src="images/5.jpg" className="w-75" alt="spon-photo" />
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Signin;
