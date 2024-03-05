/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { MdCloudUpload } from 'react-icons/md';
import Swal from 'sweetalert2';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Upload = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 2px dashed #1475cf;
  width: 100%;
  height: 450px;
  margin-bottom: 15px;
  cursor: pointer;
`;

const HiddenInput = styled.input`
  display: none;
`;

const AddRecipe = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState({
    title: '',
    ingredients: [],
    descriptions: '',
    instructions: [],
    Servings: '',
    CookingTimeHours: '',
    CookingTimeMins: '',
    PrepTimeHours: '',
    PrepTimeMins: '',
    Cuisine: '',
    RecipeImage: ''
  });

  async function getDataById() {
    const { data } = await axios.get(`http://localhost:3001/Admin/${id}`);

    setRecipe({...data, RecipeImage: ""})
    // console.log(data);
  }

  const fileInputRef = useRef(null);
  const [inputFields, setInputFields] = useState([]);

  const handleAddField = (type) => {
    setInputFields([...inputFields, { id: inputFields.length, type }]);
    setRecipe((prevRecipe) => ({
      ...prevRecipe,
      [type]: [...prevRecipe[type], '']
    }));
  };

  const handleChange = (e, index, type) => {
    const { value } = e.target;
    setRecipe((prevRecipe) => ({
      ...prevRecipe,
      [type]: prevRecipe[type].map((item, i) => (i === index ? value : item))
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Recipe submitted:', recipe);
    setRecipe({
      title: '',
      ingredients: [],
      descriptions: '',
      instructions: [],
      Servings: '',
      CookingTimeHours: '',
      CookingTimeMins: '',
      PrepTimeHours: '',
      PrepTimeMins: '',
      Cuisine: '',
      RecipeImage: '',
      ImageName: ''
    });
  };

  const handleImage = (e) => {
    const file = e.target.files[0];
    console.log(file)
    setRecipe(pre => ({ ...pre, RecipeImage: file }));
    setRecipe(pre => ({ ...pre, ImageName: pre.RecipeImage.name }))
  };

  async function postData() {
    await axios.post("http://localhost:3001/Admin", recipe);
  }

  function handleAlert() {
    const alert = Object.values(recipe).map(val => {
      if(val === "" || typeof val[0] === "undefined") {
        return "false";
      }
      return "true";
    });
    if (!alert.splice(0, alert.length - 2).includes("false")) {
      postData();
      Swal.fire({
        title: "Your Recpie added successfully!",
        text: "You clicked the button!",
        icon: "success"
      });
    }
  }

  useEffect(() => {
    if (id) {
      getDataById();
    }
  }, [])

  return (
    <div className='m-4'>
      <div className='container w-75 m-auto'>
        <hr />
        <div className="text-success"></div>
        <div><h2 className="text-success">Create New Recipe</h2></div>
        <hr />
        <div className="text-success"></div>
        <form className='shadow-lg p-3 mb-5 bg-body-tertiary rounded' onSubmit={handleSubmit}>
          <label htmlFor='title' className=' m-2 fs-6 '>Recipe Title:</label>
          <input
            type='text'
            id='title'
            name='title'
            placeholder='Recipe Title'
            className='form-control mb-3'
            value={recipe.title}
            required
            onChange={(e) => setRecipe({ ...recipe, title: e.target.value })}
          />
          <label htmlFor='image' className=' m-2 fs-6 '>Recipe Image:</label>
          <Upload className="mb-3 col-8">
            {recipe.RecipeImage ? (
              <img
                src={URL.createObjectURL(recipe.RecipeImage)}
                style={{ width: '100%', height: '100%' }}
                alt="Selected"
              />
            ) : (
              <>
                <MdCloudUpload color="#1475cf" size={60}></MdCloudUpload>
                <p> Browse files to upload</p>
              </>
            )}
            <HiddenInput
              type="file"
              accept="image/*"
              id="RecipeImage"
              name="RecipeImage"
              onChange={handleImage}
              ref={fileInputRef}
              required
            />
          </Upload>
          <label htmlFor='Description' className=' m-2 fs-6'>Description:</label>
          <textarea
            type='text'
            id='Description'
            name='Description'
            placeholder='Description'
            className='form-control mb-3'
            value={recipe.descriptions}
            onChange={(e) => setRecipe({ ...recipe, descriptions: e.target.value })}
          ></textarea>
          <label className='fs-6 m-2'>Ingredients:</label>
          {inputFields
            .filter((field) => field.type === 'ingredients')
            .map((field, index) => (
              <input
                key={index}
                type='text'
                className='form-control mb-2'
                value={recipe.ingredients[index] || ''}
                placeholder={`Ingredient #${index + 1}`}
                onChange={(e) => handleChange(e, index, 'ingredients')}
              />
            ))}
            <br />
          <span className="bi bi-plus-circle fs-3 m-2 text-success" onClick={() => handleAddField('ingredients')}></span>
          <br />
          <label className='fs-6 m-2'>Instructions:</label>
          {inputFields
            .filter((field) => field.type === 'instructions')
            .map((field, index) => (
              <input
                key={index}
                type='text'
                className='form-control mb-2'
                value={recipe.instructions[index] || ''}
                placeholder={`Instruction #${index + 1}`}
                onChange={(e) => handleChange(e, index, 'instructions')}
              />
            ))}
            <br />
          <span className="bi bi-plus-circle fs-3 m-2 text-success" onClick={() => handleAddField('instructions')}></span>
          <br />




          <label htmlFor='Servings' className=' m-2 fs-6 '>Servings:</label>
          <input
            type='text'
            id='Servings'
            name='Servings'
            placeholder='Recipe Servings'
            className='form-control mb-3'
            value={recipe.Servings}
            onChange={(e) => setRecipe({ ...recipe, Servings: e.target.value })}
            required
          />

          <label className="m-2 form-label">
            Preparation Time:
          </label>
          <div className="mb-2 d-flex align-items-start">
            <input
              type="number"
              className="form-control m-1 mb-2"
              name="PrepTimeHours"
              value={recipe.PrepTimeHours}
              onChange={(e) => setRecipe({ ...recipe, PrepTimeHours: e.target.value })}
              required
              placeholder='Hours'
            />
            <input
              type="number"
              className="form-control m-1 mb-2"
              name="PrepTimeMins"
              value={recipe.PrepTimeMins}
              onChange={(e) => setRecipe({ ...recipe, PrepTimeMins: e.target.value })}
              required
              placeholder='Minutes'
            />
          </div>

          <label htmlFor="CookingTime" className="m-2 form-label">
            Cooking Time:
          </label>
          <div className="mb-2 d-flex align-items-start">
            <input
              type="number"
              className="form-control m-1 mb-2"
              name="CookingTimeHours"
              value={recipe.CookingTimeHours}
              onChange={(e) => setRecipe({ ...recipe, CookingTimeHours: e.target.value })}
              required
              placeholder='Hours'
            />
            <input
              type="number"
              className="form-control m-1 mb-2"
              name="CookingTimeMins"
              value={recipe.CookingTimeMins}
              onChange={(e) => setRecipe({ ...recipe, CookingTimeMins: e.target.value })}
              required
              placeholder='Minutes'
            />
          </div>

          <label htmlFor='Cuisine' className=' m-2 fs-6 '>Cuisine:</label>
          <select
            id='Cuisine'
            name='Cuisine'
            className='form-select  mb-3'
            value={recipe.Cuisine}
            onChange={(e) => setRecipe({ ...recipe, Cuisine: e.target.value })}
            required
          >
            <option value='' disabled>Select Cuisine</option>
            <option value='Italian'>Italian</option>
            <option value='American'>American</option>
            <option value='Japanese'>Japanese</option>
            <option value='Egyptian'>Egyptian</option>
          </select>


          <div className='d-flex justify-content-center m-4'>
            <button className='btn btn-success w-25' type="submit" onClick={handleAlert}>
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddRecipe;















































