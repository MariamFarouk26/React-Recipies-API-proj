import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const NewRecipes = () => {
  const [data, setData] = useState([]);
  const history = useNavigate();

  async function getData() {
    try {
      const { data } = await axios.get("http://localhost:3001/Admin");
      setData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  const handleUpdate = (id) => {
    // Redirect to AddRecipe page with recipe ID for updating
    history(`/addrecipe/${id}`);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/Admin/${id}`);
      // Remove the deleted recipe from the state
      setData((prevData) => prevData.filter((recipe) => recipe.id !== id));
      console.log("Recipe deleted successfully");
    } catch (error) {
      console.error("Error deleting recipe:", error);
    }
  };

  return (
    <div style={{ marginBlock: "5em" }}>
      <div className="container-fluid">
        <div className="row g-5 mx-auto">
          <h2 style={{ fontWeight: "700", fontSize: "2rem" }}>
            Admin Recipes
          </h2>
          {data.map((recipe) => (
            <div className="col-md-4 col-sm-6" key={recipe.id}>
              <div
                className="overflow-hidden position-relative h-100"
                style={{ cursor: "pointer" }}
              >
                <div className="border rounded h-100">
                  <div className="w-100">
                    <img
                      style={{ height: "300px", objectFit: "cover" }}
                      className="w-100"
                      src={`./images/${recipe?.ImageName}`}
                      alt={recipe.title}
                    />
                    {/* <div
                      className="position-absolute bg-white rounded py-1 px-2"
                      style={{ top: "10px", right: "20px" }}
                    >
                      <i
                        className="bi bi-bookmark"
                        style={{ color: "#198754" }}
                      ></i>
                    </div> */}
                </div>

                <div className="p-3 d-flex align-items-center">
                <div>
                    <h5 className="fw-700" style={{ fontSize: "1.5rem" }}>
                    {`${recipe.title} (${recipe.id})`}
                    </h5>
                    <p className="m-0 text-muted" style={{ fontWeight: "500" }}>
                    {recipe.Cuisine}
                    </p>
                </div>
                <button
                    className="btn btn-success shadow-sm px-4 mx-2"
                    onClick={() => handleUpdate(recipe.id)}
                >
                    Update
                </button>
                <button
                    className="btn btn-danger shadow-sm px-4 mx-2"
                    onClick={() => handleDelete(recipe.id)}
                >
                    Delete
                </button>
                </div>

            </div>
            </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewRecipes;
