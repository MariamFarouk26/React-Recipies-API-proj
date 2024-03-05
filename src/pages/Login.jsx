/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { usersAction } from "../redux/slice/users";
import { setLogedInUser } from "../redux/slice/logedInUser";
import Socailf from "../components/Socailf";
import SocialG from "../components/Socialgoogle";

const Login = () => {
  const Users = useSelector((state) => state.users.users);
  // const loggedInUser = useSelector((state) => state.logedInUser.logedInUser);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    dispatch(usersAction());
  }, [dispatch]);

  const handlechange = (event) => {
    const { name, value } = event.target;
    setUser((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleclick = (event) => {
    event.preventDefault();
    if (!user.email || !user.password) {
      console.log("Please fill in all fields.");
      return;
    }

    const existingUser = Users.find((u) => u.email === user.email);
    if (existingUser && user.password === existingUser.password) {
      console.log("Logged in");
      dispatch(setLogedInUser(existingUser));
      navigate("/home");
    } else {
      console.log("Invalid Email or Password ");
    }
  };

  return (
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
                <h2 className="fw-bold mb-5 btngreen">Log In</h2>
                <form onSubmit={handleclick}>
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

                  <button
                    type="submit"
                    className="btn btn-success btn-block mb-4"
                  >
                    Log In
                  </button>

                  <div className="text-center">
                    <p>or sign up with:</p>
                    <div>
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
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className="d-none d-lg-block col-lg-6 mb-5 mb-lg-0">
            <img src="images/3.jpg" style={{ width: "100%" }} alt="login-photo" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
